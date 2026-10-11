import { bands } from "@/app/music/data";
import { getSortedAlbums, isBandId } from "@/app/music/selectors";
import type { Album } from "@/app/music/types";
import { ListenMenu } from "@/components/client/ListenMenu";
import { RecordsRow, Section } from "@/components/music";
import { formatReleaseDate } from "@/utils/time";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = Promise<{ album: string; band: string }>;

export function generateStaticParams() {
  return Object.entries(bands).flatMap(([band, { albums }]) =>
    Object.keys(albums).map((album) => ({ album, band }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { album: albumId, band: bandId } = await params;
  const album = getAlbum(bandId, albumId);
  return album && isBandId(bandId)
    ? { title: `${album.name} · ${bands[bandId].name}` }
    : {};
}

export default async function AlbumPage({ params }: { params: Params }) {
  const { album: albumId, band: bandId } = await params;
  const album = getAlbum(bandId, albumId);
  if (!album || !isBandId(bandId)) {
    notFound();
  }

  const band = bands[bandId];
  const otherAlbums = getSortedAlbums(band).filter(([id]) => id !== albumId);

  return (
    <main>
      <section className="flex flex-col gap-6 pb-14 pt-2 sm:flex-row sm:gap-8 sm:pb-[72px] sm:pt-4 lg:gap-12 lg:pb-[88px] lg:pt-8">
        <Image
          alt={`${album.name} cover art`}
          className="aspect-square h-auto w-full self-start rounded-[18px] object-cover sm:w-[320px] sm:rounded-[20px] lg:w-[460px]"
          height={460}
          priority
          src={album.image}
          width={460}
        />
        <div className="flex flex-1 flex-col gap-5">
          <div>
            <Link
              className="eyebrow text-accent hover:underline"
              href={`/music/${bandId}`}
            >
              {band.name}
            </Link>
            <h1 className="heading text-[40px] leading-[0.95] sm:text-[56px] lg:text-[72px]">
              {album.name}
            </h1>
            <div className="mt-2 text-subtle">
              {formatReleaseDate(album.date)}
              {album.tracks.length > 0 &&
                ` · ${album.tracks.length} ${
                  album.tracks.length === 1 ? "song" : "songs"
                }`}
            </div>
          </div>
          <div>
            <ListenMenu title={album.name} urls={album.urls} />
          </div>
          {album.tracks.length > 0 && (
            <ol className="flex flex-col">
              {album.tracks.map((track, index) => (
                <li
                  className="flex gap-4 border-b border-divider py-2.5"
                  key={index}
                >
                  <span className="w-6 shrink-0 text-right font-mono text-[13px] leading-6 text-subtle">
                    {index + 1}
                  </span>
                  {track}
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {otherAlbums.length > 0 && (
        <Section title={`More from ${band.name}`}>
          <RecordsRow albums={otherAlbums} bandId={bandId} />
        </Section>
      )}
    </main>
  );
}

function getAlbum(bandId: string, albumId: string): Album | undefined {
  if (!isBandId(bandId)) {
    return undefined;
  }
  const albums: Record<string, Album> = bands[bandId].albums;
  return Object.hasOwn(albums, albumId) ? albums[albumId] : undefined;
}
