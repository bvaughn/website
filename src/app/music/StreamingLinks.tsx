import { Urls } from "@/app/music/types";
import Image from "next/image";

const SIZE = 24;

export function StreamingLinks({ urls }: { urls: Urls }) {
  const { appleMusic, bandCamp, googleMusic, soundcloud, spotify } = urls;

  return (
    <>
      {appleMusic && (
        <a href={appleMusic} rel="noopener noreferrer" target="_blank">
          <Image
            alt="Apple Music"
            className="rounded"
            height={SIZE}
            src="/images/logos/apple-music.png"
            width={SIZE}
          />
        </a>
      )}
      {bandCamp && (
        <a href={bandCamp} rel="noopener noreferrer" target="_blank">
          <Image
            alt="Bandcamp"
            className="rounded"
            height={SIZE}
            src="/images/logos/bandcamp.png"
            width={SIZE}
          />
        </a>
      )}
      {googleMusic && (
        <a href={googleMusic} rel="noopener noreferrer" target="_blank">
          <Image
            alt="Google Music"
            className="rounded"
            height={SIZE}
            src="/images/logos/google-music.png"
            width={SIZE}
          />
        </a>
      )}
      {soundcloud && (
        <a href={soundcloud} rel="noopener noreferrer" target="_blank">
          <Image
            alt="Soundcloud"
            className="rounded"
            height={SIZE}
            src="/images/logos/soundcloud.png"
            width={SIZE}
          />
        </a>
      )}
      {spotify && (
        <a href={spotify} rel="noopener noreferrer" target="_blank">
          <Image
            alt="Spotify"
            className="rounded"
            height={SIZE}
            src="/images/logos/spotify.png"
            width={SIZE}
          />
        </a>
      )}
    </>
  );
}
