import { Main } from "@/app/Main";
import { BandSubNavigation } from "@/app/music/BandSubNavivation";
import { bands } from "@/app/music/data";
import { StreamingLinks } from "@/app/music/StreamingLinks";
import type { Album } from "@/app/music/types";
import { formatReleaseDate } from "@/utils/time";
import Image from "next/image";
import Link from "next/link";

export default async function Album({
  params,
}: {
  params: {
    album: string;
    band: keyof typeof bands;
  };
}) {
  const { album: albumId, band: bandId } = await params;
  const band = bands[bandId];
  const album = band.albums[albumId as keyof typeof band.albums] as Album;

  return (
    <>
      <BandSubNavigation currentBandId={bandId} />

      <Main>
        <section className="flex flex-row gap-2 mb-2">
          <Image
            alt={album.name}
            className="rounded"
            height={100}
            loading="eager"
            priority
            src={album.image}
            width={100}
          />
          <div className="flex flex-col gap-1">
            <div className="text-lg font-medium">{album.name}</div>
            <div>
              <Link href={`/music/${bandId}`}>{band.name}</Link>
            </div>
            <div className="text-sm">
              Released in {formatReleaseDate(album.date)}
            </div>
            <div className="flex flex-row gap-2">
              <StreamingLinks urls={album.urls} />
            </div>
          </div>
        </section>
        <section>
          <ol>
            {album.tracks.map((track, index) => (
              <li key={index}>
                {index + 1}. {track}
              </li>
            ))}
          </ol>
        </section>
      </Main>
    </>
  );
}
