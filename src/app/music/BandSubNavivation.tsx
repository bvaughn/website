import { bands, bandsArray } from "@/app/music/data";
import { SubNavigation } from "@/components/client/SubNavigation";
import { SubNavigationLink } from "@/components/client/SubNavigationLink";
import Image from "next/image";

export function BandSubNavigation({
  currentBandId,
}: {
  currentBandId: keyof typeof bands;
}) {
  return (
    <SubNavigation
      header="Music"
      links={bandsArray.map(([bandId, { genre, image, name }]) => (
        <SubNavigationLink
          key={bandId}
          href={`/music/${bandId}`}
          isActive={currentBandId === bandId}
          children={
            <>
              <Image
                alt={name}
                className="object-cover w-8 h-8 rounded-full"
                height={32}
                loading="eager"
                src={image}
                width={32}
              />
              <div>
                <div className="font-medium capitalize whitespace-nowrap">
                  {name}
                </div>
                <div className="text-xs md:text-sm opacity-80 whitespace-nowrap">
                  {genre}
                </div>
              </div>
            </>
          }
        />
      ))}
    />
  );
}
