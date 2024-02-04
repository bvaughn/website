import Image from "next/image";
import { bands, bandsArray } from "@/app/music/data";

export function BandSubNav({
  currentBandId,
}: {
  currentBandId: keyof typeof bands;
}) {
  return (
    <nav className="flex flex-row flex-wrap justify-center md:justify-start items-center md:items-start md:flex-col flex-auto max-h-svh p-2 md:px-0 md:gap-4 overflow-auto bg-gray-800 shrink-0">
      <div className="px-5 text-lg font-medium text-white hidden md:block">
        Music
      </div>

      {bandsArray.map(([bandId, { genre, image, name }]) => (
        <a
          className={`flex shrink-0 md:w-full items-center mx:w-full p-2 md:px-4 rounded transition-colors duration-200 gap-x-2 focus:outline-none ${
            currentBandId === bandId
              ? "text-yellow-300"
              : "text-white hover:text-yellow-100 focus:text-yellow-100"
          }`}
          key={bandId}
          href={`/music/${bandId}`}
          tabIndex={0}
        >
          <Image
            alt={name}
            className="object-cover w-8 h-8 rounded-full"
            height={32}
            loading="eager"
            src={image}
            width={32}
          />

          <div className="text-left rtl:text-right">
            <div className="font-medium capitalize whitespace-nowrap">
              {name}
            </div>
            <div className="text-xs md:text-sm opacity-80 whitespace-nowrap">
              {genre}
            </div>
          </div>
        </a>
      ))}
    </nav>
  );
}
