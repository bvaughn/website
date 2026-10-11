import { bands } from "@/app/music/data";
import type { Album, Band, Song, Urls } from "@/app/music/types";

export type BandId = keyof typeof bands;

export type Release = {
  date: Date;
  href?: string;
  image: string;
  kind: "album" | "single";
  name: string;
  urls: Urls;
};

export function getBand(bandId: string): Band | undefined {
  return isBandId(bandId) ? bands[bandId] : undefined;
}

export function isBandId(bandId: string): bandId is BandId {
  return Object.hasOwn(bands, bandId);
}

export function getSortedAlbums(band: Band): [string, Album][] {
  return Object.entries(band.albums).sort(
    ([, a], [, b]) => b.date.getTime() - a.date.getTime()
  );
}

export function getSortedTracks(band: Band): Song[] {
  return sortByDate(band.tracks);
}

export function getSortedFeatures(band: Band): Song[] {
  return sortByDate(band.features ?? []);
}

function sortByDate(songs: Song[]): Song[] {
  return [...songs].sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getLatestRelease(bandId: BandId): Release | undefined {
  const band = bands[bandId];
  const [albumEntry] = getSortedAlbums(band);
  const [track] = getSortedTracks(band);

  if (albumEntry && (!track || albumEntry[1].date >= track.date)) {
    const [albumId, album] = albumEntry;
    return {
      date: album.date,
      href: `/music/${bandId}/${albumId}`,
      image: album.image,
      kind: "album",
      name: album.name,
      urls: album.urls,
    };
  } else if (track) {
    return {
      date: track.date,
      image: track.image ?? band.image,
      kind: "single",
      name: track.name,
      urls: track.urls ?? {},
    };
  }
}
