import { SubNavigation } from "@/components/client/SubNavigation";
import { SubNavigationLink } from "@/components/client/SubNavigationLink";
import { Icon } from "@/components/shared/Icon";

export default function ContactSideNavigation() {
  return (
    <SubNavigation
      header="Contact"
      links={
        <>
          <SubNavigationLink href="https://github.com/bvaughn/" isExternal>
            <Icon className="w-8 h-8 text-blue-200" type="github" />
            <div>
              <div className="font-medium capitalize whitespace-nowrap">
                GitHub
              </div>
              <div className="text-xs md:text-sm opacity-80 whitespace-nowrap">
                bvaughn
              </div>
            </div>
          </SubNavigationLink>
          <SubNavigationLink
            href="https://bsky.app/profile/brian.blue"
            isExternal
          >
            <Icon className="w-8 h-8 text-blue-200" type="blue-sky" />
            <div>
              <div className="font-medium capitalize whitespace-nowrap">
                Blue Sky
              </div>
              <div className="text-xs md:text-sm opacity-80 whitespace-nowrap">
                @brian.blue
              </div>
            </div>
          </SubNavigationLink>
          <SubNavigationLink
            href="https://www.threads.net/@brian.david.vaughn"
            isExternal
          >
            <Icon className="w-8 h-8 text-blue-200" type="threads" />
            <div>
              <div className="font-medium capitalize whitespace-nowrap">
                Threads
              </div>
              <div className="text-xs md:text-sm opacity-80 whitespace-nowrap">
                @brian.david.vaughn
              </div>
            </div>
          </SubNavigationLink>
          <SubNavigationLink
            href="https://www.facebook.com/brian.david.vaughn"
            isExternal
          >
            <Icon className="w-8 h-8 text-blue-200" type="facebook" />
            <div>
              <div className="font-medium capitalize whitespace-nowrap">
                Facebook
              </div>
              <div className="text-xs md:text-sm opacity-80 whitespace-nowrap">
                brian.david.vaughn
              </div>
            </div>
          </SubNavigationLink>
          <SubNavigationLink
            href="https://www.linkedin.com/in/briandavidvaughn/"
            isExternal
          >
            <Icon className="w-8 h-8 text-blue-200" type="linked-in" />
            <div>
              <div className="font-medium capitalize whitespace-nowrap">
                Linked In
              </div>
              <div className="text-xs md:text-sm opacity-80 whitespace-nowrap">
                briandavidvaughn
              </div>
            </div>
          </SubNavigationLink>
        </>
      }
    />
  );
}
