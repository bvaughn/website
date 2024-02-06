"use client";

import { NavigationLink } from "@/components/client/NavigationLink";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-row md:flex-col items-center gap-1 md:gap-2 max-h-svh p-2 bg-gray-900">
      <NavigationLink
        active={pathname.startsWith("/music")}
        icon="music"
        label="Music"
        title="Listen to my music"
        to="/music/brian-vaughn"
      />
      {/*
        <NavigationLink
          active={pathname.startsWith("/blog")}
          icon="blog"
          label="Blog"
          title="Blog posts"
          to="/blog"
        />
      */}
      <NavigationLink
        active={pathname.startsWith("/contact")}
        icon="contact"
        label="Contact"
        title="Contact me"
        to="/contact"
      />
      <div className="flex-grow" />
      <NavigationLink
        active={false}
        icon="download-resume"
        label="Resume"
        title="Download my resume"
        to="https://www.bvaughn.me/resume.pdf"
      />
    </aside>
  );
}
