"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { Icon, IconType } from "@/components/shared/Icon";
import { ComponentPropsWithoutRef } from "react";

export function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-row md:flex-col items-center gap-4 max-h-svh p-2 bg-gray-900">
      {/*
      <NavigationLink
        active={pathname === "/"}
        icon="home"
        title="Home page"
        to="/"
      />
      */}
      <NavigationLink
        active={pathname.startsWith("/music")}
        icon="music"
        title="Music page"
        to="/music/brian-vaughn"
      />
      {/*
        <NavigationLink
          active={pathname.startsWith("/blog")}
          icon="blog"
          title="Blog page"
          to="/blog"
        />
      <NavigationLink
        active={pathname.startsWith("/contact")}
        icon="contact"
        title="Contact page"
        to="/contact"
      />
      */}
      <div className="flex-grow" />
      <NavigationLink
        active={false}
        icon="download-resume"
        title="Download my resume"
        to="https://www.bvaughn.me/resume.pdf"
      />
    </aside>
  );
}

function NavigationLink({
  active,
  icon,
  to,
  ...rest
}: {
  active: boolean;
  icon: IconType;
  to: string;
} & ComponentPropsWithoutRef<"a">) {
  return (
    <Link
      href={to}
      className={`p-1.5 transition-colors duration-200 rounded-lg ${
        active
          ? "text-gray-400 focus:bg-gray-800 focus:outline-none"
          : "text-yellow-400 hover:bg-gray-800 focus:bg-gray-800 focus:outline focus:outline-yellow-400"
      }`}
      {...rest}
    >
      <Icon className="w-6 h-6" type={icon} />
    </Link>
  );
}
