import Image from "next/image";

import { bands, bandsArray } from "./data";

export function SideNav({
  currentBandId,
}: {
  currentBandId: keyof typeof bands;
}) {
  return (
    <section className="flex-auto h-screen py-4 overflow-y-auto bg-gray-800 shrink-0 max-w-48">
      <h2 className="px-5 text-lg font-medium text-white">My music</h2>

      {bandsArray.map(([bandId, { genre, image, name }]) => (
        <a
          className={`flex items-center w-full px-5 py-2 transition-colors duration-200 gap-x-2 focus:outline-none ${
            currentBandId === bandId
              ? "bg-gray-900 focus:bg-gray-900 "
              : "hover:bg-gray-900 focus:bg-gray-900"
          }`}
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
            <div className="font-medium capitalize text-white whitespace-nowrap">
              {name}
            </div>
            <div className="text-sm text-gray-400 whitespace-nowrap">
              {genre}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
