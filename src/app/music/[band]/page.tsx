import { bands } from "@/app/music/data";
import {
  getLatestRelease,
  getSortedAlbums,
  getSortedFeatures,
  getSortedTracks,
  isBandId,
} from "@/app/music/selectors";
import {
  BandCards,
  LatestReleaseCard,
  RecordsRow,
  Section,
  SinglesList,
} from "@/components/music";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ band: string }>;

export function generateStaticParams() {
  return Object.keys(bands).map((band) => ({ band }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { band: bandId } = await params;
  return isBandId(bandId) ? { title: `${bands[bandId].name} · Music` } : {};
}

export default async function BandPage({ params }: { params: Params }) {
  const { band: bandId } = await params;
  if (!isBandId(bandId)) {
    notFound();
  }

  const band = bands[bandId];
  const albums = getSortedAlbums(band);
  const features = getSortedFeatures(band);
  const latestRelease = getLatestRelease(bandId);
  const tracks = getSortedTracks(band);

  return (
    <main>
      <section className="flex flex-col gap-6 pb-14 pt-2 sm:flex-row sm:items-center sm:gap-8 sm:pb-[72px] sm:pt-4 lg:gap-12 lg:pb-[88px] lg:pt-8">
        <Image
          alt={band.name}
          className="aspect-square w-full rounded-[18px] object-cover sm:w-[280px] sm:rounded-[20px] lg:w-[360px]"
          height={360}
          priority
          src={band.image}
          width={360}
        />
        <div className="flex flex-1 flex-col gap-5">
          <div>
            <div className="eyebrow text-accent">{band.genre}</div>
            <h1 className="heading text-[46px] leading-[0.95] sm:text-[68px] lg:text-[88px]">
              {band.name}
            </h1>
          </div>
          {band.description.map((paragraph, index) => (
            <p className="max-w-[560px] text-fg-soft" key={index}>
              {paragraph.trim()}
            </p>
          ))}
          {band.members.length > 1 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {band.members.map((member) => (
                <li className="flex items-center gap-3" key={member.name}>
                  <Image
                    alt=""
                    className="h-11 w-11 rounded-full object-cover"
                    height={44}
                    src={member.image}
                    width={44}
                  />
                  <span>
                    <span className="block font-semibold leading-tight">
                      {member.name}
                    </span>
                    <span className="text-sm text-subtle">{member.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
          {latestRelease && <LatestReleaseCard release={latestRelease} />}
        </div>
      </section>

      {albums.length > 0 && (
        <Section title="Records">
          <RecordsRow albums={albums} bandId={bandId} />
        </Section>
      )}

      {tracks.length > 0 && (
        <Section id="singles" title="Singles">
          <SinglesList fallbackImage={band.image} tracks={tracks} />
        </Section>
      )}

      {features.length > 0 && (
        <Section id="features" title="Features">
          <SinglesList
            areFeatures
            fallbackImage={band.image}
            tracks={features}
          />
        </Section>
      )}

      <Section title="More music">
        <BandCards excludeBandId={bandId} />
      </Section>
    </main>
  );
}
