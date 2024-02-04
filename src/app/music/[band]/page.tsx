import { Main } from "@/app/Main";
import { SideNav } from "@/app/music/SideNav";
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
      <SideNav currentBandId={band} />

      <Main>
        <p>{description.trim().replace(/\n\s+/g, "\n")}</p>

        {members.length > 1 && (
          <section>
            <h2>Members</h2>
            <div className="flex flex-row gap-2 items-center">
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
                  <span>{member.name}</span> <small>({member.role})</small>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="max-w-screen-lg">
          <h2>Albums</h2>
          <div>
            {albumsArray.map(([albumId, album]) => (
              <Link
                className="inline-block mr-1 mb-1"
                key={albumId}
                href={`/music/${band}/${albumId}`}
                tabIndex={0}
              >
                <Image
                  alt={album.name}
                  className="rounded"
                  height={200}
                  src={album.image}
                  width={200}
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
          <h2>Singles</h2>
          <ul className="flex flex-col gap-1">
            {tracks
              .sort((a, b) => b.date.getTime() - a.date.getTime())
              .map((track, index) => (
                <li className="flex flex-row gap-1 items-center">
                  <div className="w-32 mr-2 flex flex-row gap-1 justify-end">
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
