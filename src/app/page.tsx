import { bands } from "@/app/music/data";
import {
  getLatestRelease,
  getSortedAlbums,
  getSortedFeatures,
  getSortedTracks,
} from "@/app/music/selectors";
import {
  BandCards,
  LatestReleaseCard,
  RecordsRow,
  Section,
  SinglesList,
} from "@/components/music";
import Image from "next/image";

const BAND_ID = "brian-vaughn";
const PREVIEW_COUNT = 5;

export default function Home() {
  const band = bands[BAND_ID];
  const features = getSortedFeatures(band);
  const latestRelease = getLatestRelease(BAND_ID);
  const tracks = getSortedTracks(band);

  return (
    <main>
      <section className="flex flex-col gap-6 pb-14 pt-2 sm:gap-8 sm:pb-[72px] sm:pt-4 lg:flex-row lg:items-stretch lg:gap-12 lg:pb-[88px] lg:pt-8">
        <Image
          alt="Brian Vaughn under colored stage lights"
          className="h-[420px] w-full rounded-[18px] object-cover object-[50%_30%] sm:h-[460px] sm:rounded-[20px] lg:aspect-[4/5] lg:h-auto lg:max-h-[620px] lg:flex-1"
          height={620}
          priority
          src={band.image}
          width={496}
        />
        <div className="flex flex-col justify-center gap-6 lg:flex-1 lg:gap-7">
          <h1 className="heading text-[46px] leading-[0.95] sm:text-[68px] lg:text-[clamp(48px,6.5vw,88px)]">
            Hi, I&apos;m Brian.
            <br />
            <span className="text-muted">I write songs after hours.</span>
          </h1>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7 lg:flex-col">
            <p className="flex-1 text-fg-soft lg:max-w-[480px]">
              Started at 15, still recording in a makeshift home studio. Solo
              records, a prog band from Virginia, and an industrial project for
              the heavier stuff.
            </p>
            {latestRelease && (
              <div className="sm:w-[360px] lg:w-auto">
                <LatestReleaseCard release={latestRelease} />
              </div>
            )}
          </div>
        </div>
      </section>

      <Section title="Records">
        <RecordsRow albums={getSortedAlbums(band)} bandId={BAND_ID} />
      </Section>

      <Section title="Singles">
        <SinglesList
          fallbackImage={band.image}
          moreHref={`/music/${BAND_ID}#singles`}
          moreLabel={`All ${tracks.length} singles & covers`}
          tracks={tracks.slice(0, PREVIEW_COUNT)}
        />
      </Section>

      {features.length > 0 && (
        <Section title="Features">
          <SinglesList
            areFeatures
            fallbackImage={band.image}
            moreHref={
              features.length > PREVIEW_COUNT
                ? `/music/${BAND_ID}#features`
                : undefined
            }
            moreLabel={`All ${features.length} features`}
            tracks={features.slice(0, PREVIEW_COUNT)}
          />
        </Section>
      )}

      <Section id="bands" title="Bands">
        <BandCards excludeBandId={BAND_ID} />
      </Section>
    </main>
  );
}
