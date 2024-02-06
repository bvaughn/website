import { Main } from "@/app/Main";
import { BandSubNavigation } from "@/app/music/BandSubNavivation";
import { StreamingLinks } from "@/app/music/StreamingLinks";
import { bands } from "@/app/music/data";
import { formatReleaseDate } from "@/utils/time";
import Image from "next/image";
import Link from "next/link";

export default function Band({
  params: { band },
}: {
  params: {
    band: keyof typeof bands;
  };
}) {
  const { albums, description, image, members, tracks } = bands[band];

  const albumsArray = Object.entries(albums);

  return (
    <>
      <BandSubNavigation currentBandId={band} />

      <Main>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {members.length > 1 && (
          <section>
            <h2 className="text-center md:text-start">Members</h2>
            <div className="flex flex-row gap-4 flex-wrap justify-center md:justify-start">
              {members.map((member) => (
                <div
                  className="flex flex-row gap-1 items-center"
                  key={member.name}
                >
                  <Image
                    alt={member.name}
                    className="rounded-full mr-1"
                    height={48}
                    loading="eager"
                    src={member.image}
                    width={48}
                  />
                  <div className="flex flex-col gap-1 items-start md:items-center">
                    <span>{member.name}</span> <small>({member.role})</small>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="max-w-screen-lg">
          <h2 className="text-center md:text-start">Albums</h2>
          <div className="flex flex-row gap-2 flex-wrap justify-center md:justify-start">
            {albumsArray.map(([albumId, album]) => (
              <Link
                className="inline-block mr-1 mb-1 shrink-0"
                key={albumId}
                href={`/music/${band}/${albumId}`}
                tabIndex={0}
              >
                <Image
                  alt={album.name}
                  className="rounded"
                  height={160}
                  loading="eager"
                  priority
                  src={album.image}
                  width={160}
                />
                <div className="align-middle text-black">
                  <span>{album.name}</span>{" "}
                  <small>({formatReleaseDate(album.date)})</small>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-screen-lg">
          <h2 className="text-center md:text-start">Singles</h2>
          <ul className="flex flex-col gap-1">
            {tracks
              .sort((a, b) => b.date.getTime() - a.date.getTime())
              .map((track, index) => (
                <li className="flex flex-row gap-1 items-center" key={index}>
                  <div className="w-32 mr-2 flex flex-row gap-1 justify-end shrink-0">
                    <StreamingLinks urls={track.urls} />
                  </div>
                  <Image
                    alt={track.name}
                    className="rounded"
                    height={48}
                    src={track.image ?? image}
                    width={48}
                  />
                  <div>
                    <div>{track.name}</div>
                    <small>({formatReleaseDate(track.date)})</small>
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </Main>
    </>
  );
}
