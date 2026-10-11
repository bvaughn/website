import { bandsArray } from "@/app/music/data";
import {
  getSortedAlbums,
  type BandId,
  type Release,
} from "@/app/music/selectors";
import type { Album, Song } from "@/app/music/types";
import { ListenMenu } from "@/components/client/ListenMenu";
import { formatReleaseDate } from "@/utils/time";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  action,
  children,
  id,
  title,
}: {
  action?: ReactNode;
  children: ReactNode;
  id?: string;
  title: string;
}) {
  return (
    <section className="scroll-mt-6 pb-14 sm:pb-[88px]" id={id}>
      <div className="mb-4 flex items-baseline justify-between gap-3 sm:mb-6">
        <h2 className="heading text-[30px] sm:text-4xl lg:text-[40px]">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export function LatestReleaseCard({ release }: { release: Release }) {
  const label = release.kind === "album" ? "New album" : "New single";
  const title = release.href ? (
    <Link className="hover:underline" href={release.href}>
      {release.name}
    </Link>
  ) : (
    release.name
  );

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-panel p-2.5 sm:gap-4 sm:p-3 lg:max-w-[440px]">
      <Image
        alt=""
        className="h-[60px] w-[60px] rounded-[10px] object-cover sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
        height={72}
        src={release.image}
        width={72}
      />
      <div className="min-w-0 flex-1">
        <div className="eyebrow text-accent">{label}</div>
        <div className="truncate text-lg font-semibold lg:text-xl">
          {title}
        </div>
      </div>
      <ListenMenu title={release.name} urls={release.urls} />
    </div>
  );
}

export function RecordsRow({
  albums,
  bandId,
}: {
  albums: [string, Album][];
  bandId: BandId;
}) {
  return (
    <ul className="-mr-4 flex snap-x gap-3 overflow-x-auto pb-3 sm:-mr-8 sm:gap-4 lg:mr-0 lg:gap-5">
      {albums.map(([albumId, album]) => (
        <li
          className="w-[168px] shrink-0 snap-start sm:w-[220px] lg:w-[260px]"
          key={albumId}
        >
          <Link
            className="group flex flex-col gap-2 sm:gap-3"
            href={`/music/${bandId}/${albumId}`}
          >
            <Image
              alt=""
              className="aspect-square w-full rounded-xl object-cover transition-opacity group-hover:opacity-80 lg:rounded-[14px]"
              height={260}
              src={album.image}
              width={260}
            />
            <span>
              <span className="block font-semibold leading-tight">
                {album.name}
              </span>
              <span className="text-sm text-subtle">
                {formatReleaseDate(album.date)}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SinglesList({
  areFeatures = false,
  fallbackImage,
  moreHref,
  moreLabel,
  tracks,
}: {
  areFeatures?: boolean;
  fallbackImage: string;
  moreHref?: string;
  moreLabel?: string;
  tracks: Song[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
      {tracks.map((track, index) => (
        <li
          className="flex items-center gap-3.5 border-b border-divider py-2.5"
          key={index}
        >
          <Image
            alt=""
            className="h-12 w-12 shrink-0 rounded-lg object-cover lg:h-11 lg:w-11"
            height={48}
            src={track.image ?? fallbackImage}
            width={48}
          />
          <span className="min-w-0 flex-1">
            <span className="block truncate">{track.name}</span>
            {track.artists && (
              <span className="block truncate text-sm text-subtle">
                {areFeatures
                  ? track.artists.join(", ")
                  : `with ${track.artists.join(", ")}`}
              </span>
            )}
          </span>
          <span className="font-mono text-xs text-subtle sm:text-[13px]">
            {formatReleaseDate(track.date)}
          </span>
          <ListenMenu title={track.name} urls={track.urls} variant="subtle" />
        </li>
      ))}
      {moreHref && (
        <li className="border-b border-divider py-2.5">
          <Link
            className="flex items-center gap-3.5 text-accent"
            href={moreHref}
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-line lg:h-11 lg:w-11">
              +
            </span>
            {moreLabel}
          </Link>
        </li>
      )}
    </ul>
  );
}

export function BandCards({ excludeBandId }: { excludeBandId: BandId }) {
  const otherBands = bandsArray.filter(([bandId]) => bandId !== excludeBandId);

  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
      {otherBands.map(([bandId, band]) => {
        const [latestAlbum] = getSortedAlbums(band);
        const image = latestAlbum?.[1].image ?? band.image;

        return (
          <li key={bandId}>
            <Link
              className="group relative flex min-h-[220px] flex-col justify-end gap-0.5 overflow-hidden rounded-[18px] border border-line bg-panel p-[18px] sm:min-h-[280px] sm:rounded-[20px] sm:p-6"
              href={`/music/${bandId}`}
            >
              <Image
                alt=""
                className="object-cover opacity-40 transition-opacity group-hover:opacity-50"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                src={image}
              />
              <span className="relative text-[26px] font-bold tracking-tight sm:text-[32px]">
                {band.name}
              </span>
              <span className="relative text-[15px] text-[#e2dfe8] sm:text-base">
                {band.genre}
                {latestAlbum &&
                  ` · latest: “${latestAlbum[1].name}” (${formatReleaseDate(
                    latestAlbum[1].date
                  )})`}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
