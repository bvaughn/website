#!/usr/bin/env node

// Finds releases on Apple Music that aren't in src/app/music/data.ts yet,
// including songs by other artists that feature Brian Vaughn, and Apple Music
// links for entries in data.ts that don't have one.
//
// Apple's iTunes API is public and needs no key, and Apple gets every release
// the distributor sends out, so it's the source of truth for discovery.
// Spotify, YouTube Music, and SoundCloud have no keyless API for this,
// so for those the script prints search links to look up by hand.
//
// Usage:
//   pnpm find-music                  # report new releases and download cover art
//   pnpm find-music --no-download    # report only
//   pnpm find-music --check-links    # also report SoundCloud links that no longer resolve

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_PATH = join(ROOT, "src/app/music/data.ts");

// Apple Music artist ids, keyed by band id in data.ts
const APPLE_ARTISTS = {
  "brian-vaughn": 1457513547,
  "pilotless-drone": 591983497,
  pinwurm: 1457154155,
};
const FEATURED_ARTIST_NAME = "Brian Vaughn";

const args = new Set(process.argv.slice(2));
const shouldDownload = !args.has("--no-download");
const shouldCheckLinks = args.has("--check-links");

const data = readFileSync(DATA_PATH, "utf8");
const knownAppleIds = new Set(
  [...data.matchAll(/music\.apple\.com\/[^"]*?\/(\d+)(?:\?i=(\d+))?"/g)].flatMap(
    ([, albumId, trackId]) => (trackId ? [albumId, trackId] : [albumId])
  )
);
const knownNames = new Set(
  [...data.matchAll(/^\s*(?:name: )?"([^"]+)",$/gm)].map(([, name]) =>
    normalizeName(name)
  )
);

const releases = [];
for (const [bandId, artistId] of Object.entries(APPLE_ARTISTS)) {
  const results = await itunes(
    `lookup?id=${artistId}&entity=album&limit=200&country=us`
  );
  for (const collection of results) {
    if (collection.wrapperType === "collection") {
      releases.push({ bandId, collection, isFeature: false });
    }
  }
}

const ownArtistIds = new Set(Object.values(APPLE_ARTISTS));
const searchResults = await itunes(
  `search?term=${encodeURIComponent(FEATURED_ARTIST_NAME)}&entity=album&limit=200&country=us`
);
for (const collection of searchResults) {
  // Match credited artists exactly; a substring match also finds e.g. "Troy Brian Vaughn"
  const credits = [
    ...splitArtists(collection.artistName),
    ...getFeaturedArtists(collection.collectionName),
  ].map((name) => name.toLowerCase());
  if (
    !ownArtistIds.has(collection.artistId) &&
    credits.includes(FEATURED_ARTIST_NAME.toLowerCase())
  ) {
    releases.push({ bandId: "brian-vaughn", collection, isFeature: true });
  }
}

const seen = new Set();
const newReleases = releases
  .filter(({ collection }) => {
    const id = String(collection.collectionId);
    if (seen.has(id) || knownAppleIds.has(id) || isCompilation(collection)) {
      return false;
    }
    seen.add(id);
    return true;
  })
  .sort((a, b) =>
    b.collection.releaseDate.localeCompare(a.collection.releaseDate)
  );

// Releases named like a song already in data.ts aren't new; they're usually an
// earlier single of a song that's now on an album. Entries that are just missing
// their Apple link are reported separately below.
const unknown = newReleases.filter(
  ({ collection }) => !knownNames.has(normalizeName(collection.collectionName))
);

if (unknown.length === 0) {
  console.log("No new releases found.");
} else {
  console.log(`Found ${unknown.length} new release(s):\n`);
  for (const release of unknown) {
    await printRelease(release);
  }
}

await findMissingAppleLinks();

if (shouldCheckLinks) {
  await checkSoundCloudLinks();
}

// Matches entries in data.ts that have no Apple Music link against Apple's catalog,
// preferring the song's single and falling back to the track on an album
async function findMissingAppleLinks() {
  const entries = [
    ...data.matchAll(/^ {6}(?:[\w"-]+: )?\{\n([\s\S]*?)\n {6}\},$/gm),
  ]
    .map(([, body]) => body)
    .filter((body) => body.includes("date:") && !body.includes("appleMusic:"))
    .map((body) => body.match(/^\s*name: "([^"]+)",$/m)?.[1])
    .filter(Boolean);
  if (entries.length === 0) {
    return;
  }

  const candidates = new Map();
  const addCandidate = (name, url, description) => {
    const key = normalizeName(name);
    if (!candidates.has(key)) {
      candidates.set(key, []);
    }
    candidates.get(key).push({ description, url });
  };
  for (const { collection } of releases) {
    if (!isCompilation(collection)) {
      addCandidate(
        collection.collectionName,
        appleUrl(collection),
        collection.trackCount <= 2 ? "single" : "album"
      );
    }
  }
  const songs = [];
  for (const artistId of Object.values(APPLE_ARTISTS)) {
    songs.push(
      ...(await itunes(`lookup?id=${artistId}&entity=song&limit=200&country=us`))
    );
  }
  for (const song of songs) {
    if (song.wrapperType === "track" && !isCompilation(song)) {
      addCandidate(
        song.trackName,
        // Keep the ?i= track id but drop Apple's tracking parameters
        song.trackViewUrl.replace(/&.*$/, ""),
        `track on “${cleanName(song.collectionName)}”`
      );
    }
  }

  const found = [];
  const notFound = [];
  for (const name of entries) {
    const matches = candidates.get(normalizeName(name)) ?? [];
    const best =
      matches.find(({ description }) => description === "single") ??
      matches.find(({ description }) => description === "album") ??
      matches[0];
    if (best) {
      found.push({ name, ...best });
    } else {
      notFound.push(name);
    }
  }

  console.log(
    `\n${entries.length} entries in data.ts have no Apple Music link; found ${found.length} on Apple Music:\n`
  );
  for (const { description, name, url } of found) {
    console.log(`  ${name} (${description})`);
    console.log(`    appleMusic: "${url}",`);
  }
  if (notFound.length > 0) {
    console.log(`\n  Not on Apple Music: ${notFound.join(", ")}`);
  }
}

async function printRelease({ bandId, collection, isFeature }) {
  const name = cleanName(collection.collectionName);
  const date = collection.releaseDate.slice(0, 10);
  const isSingle = collection.trackCount <= 2;
  const artists = getArtists(collection, isFeature);
  const slug = slugify(isFeature ? `${name} ${artists[0]}` : name);
  const image = `/images/${isSingle ? "tracks" : "albums"}/${slug}.jpg`;

  if (shouldDownload && !existsSync(join(ROOT, "public", image))) {
    const artworkUrl = collection.artworkUrl100.replace(
      /\/\d+x\d+bb\./,
      "/640x640bb."
    );
    const response = await fetch(artworkUrl);
    if (response.ok) {
      writeFileSync(
        join(ROOT, "public", image),
        Buffer.from(await response.arrayBuffer())
      );
    } else {
      console.warn(`  (Couldn't download cover art: ${response.status})`);
    }
  }

  const where = isFeature
    ? `${bandId} → features`
    : `${bandId} → ${isSingle ? "tracks" : "albums"}`;
  const query = encodeURIComponent(`${collection.artistName} ${name}`);

  console.log(`── ${name} (${date}) · ${where}`);
  if (!isSingle) {
    console.log(
      `   Album with ${collection.trackCount} tracks; add the track list by hand`
    );
  }
  console.log(`   Spotify:       https://open.spotify.com/search/${query}`);
  console.log(`   YouTube Music: https://music.youtube.com/search?q=${query}`);
  console.log(`   SoundCloud:    https://soundcloud.com/search?q=${query}`);
  console.log();
  console.log("      {");
  if (artists.length > 0) {
    console.log(`        artists: ${JSON.stringify(artists)},`);
  }
  console.log(`        date: parseDateString("${date}"),`);
  console.log(`        image: "${image}",`);
  console.log(`        name: ${JSON.stringify(name)},`);
  console.log("        urls: {");
  console.log(`          appleMusic:\n            "${appleUrl(collection)}",`);
  console.log("        },");
  console.log("      },\n");
}

// Credited artists other than Brian Vaughn, with the releasing artist first for features
function getArtists(collection, isFeature) {
  const credited = [
    ...(isFeature ? splitArtists(collection.artistName) : []),
    ...getFeaturedArtists(collection.collectionName),
  ];
  return [...new Set(credited)].filter(
    (artist) => artist.toLowerCase() !== FEATURED_ARTIST_NAME.toLowerCase()
  );
}

function getFeaturedArtists(collectionName) {
  return [...collectionName.matchAll(/\(feat\. ([^)]+)\)/g)].flatMap(
    ([, names]) => splitArtists(names)
  );
}

function splitArtists(names) {
  return names
    .split(/,\s*|\s+&\s+/)
    .map((name) => name.trim())
    .filter(Boolean);
}

function cleanName(collectionName) {
  return collectionName
    .replace(/\s+-\s+(Single|EP)$/, "")
    .replace(/\s*\(feat\. [^)]+\)/g, "")
    .trim();
}

function normalizeName(name) {
  return cleanName(name)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function isCompilation(collection) {
  return (
    collection.artistName === "Various Artists" ||
    /\b(DJ Mix|Mixed)\b/i.test(collection.collectionName)
  );
}

function appleUrl(collection) {
  // Drop the tracking query string Apple adds
  return collection.collectionViewUrl.split("?")[0];
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['’()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function itunes(path) {
  const response = await fetch(`https://itunes.apple.com/${path}`);
  if (!response.ok) {
    throw Error(`iTunes API request failed (${response.status}): ${path}`);
  }
  return (await response.json()).results;
}

// SoundCloud serves a 200 for every URL, so a missing or private track is detected
// by the generic page title it gets instead of the track's own title
async function checkSoundCloudLinks() {
  const urls = [
    ...new Set(
      [...data.matchAll(/"(https:\/\/soundcloud\.com\/[^"]+)"/g)].map(
        ([, url]) => url
      )
    ),
  ];
  const dead = [];
  for (const url of urls) {
    const html = await (
      await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
    ).text();
    if (/<title>SoundCloud - Hear the world/.test(html)) {
      dead.push(url);
    }
  }
  console.log(
    `\n${dead.length} of ${urls.length} SoundCloud links don't resolve (private or deleted):`
  );
  for (const url of dead) {
    console.log(`  ${url}`);
  }
}
