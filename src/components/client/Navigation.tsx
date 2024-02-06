"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { Icon, IconType } from "@/components/shared/Icon";
import { ComponentPropsWithoutRef } from "react";

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

function NavigationLink({
  active,
  icon,
  label,
  to,
  ...rest
}: {
  active: boolean;
  icon: IconType;
  label: string;
  to: string;
} & ComponentPropsWithoutRef<"a">) {
  return (
    <Link
      href={to}
      className={`p-1.5 transition-colors duration-200 rounded-lg flex flex-column items-center gap-1 ${
        active
          ? "text-gray-400 focus:bg-gray-800 focus:outline-none"
          : "text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline focus:outline-blue-400"
      }`}
      {...rest}
    >
      <Icon className="w-6 h-6" type={icon} />

      <span className="md:hidden">{label}</span>
    </Link>
  );
}
