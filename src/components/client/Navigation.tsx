"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { Icon, IconType } from "../shared/Icon";
import { ComponentPropsWithoutRef } from "react";

export function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col items-center w-16 h-screen py-8 bg-gray-900 border-gray-700">
      <div className="flex flex-col space-y-8 grow">
        <NavigationLink
          active={pathname === "/"}
          icon="home"
          title="Home page"
          to="/"
        />
        <NavigationLink
          active={pathname.startsWith("/music")}
          icon="music"
          title="Music page"
          to="/music/brian-vaughn"
        />
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
      </div>
      <div className="flex flex-col space-y-8 ">
        <a
          className="p-1.5 transition-colors duration-200 rounded-lg text-blue-400 bg-gray-800"
          href="https://www.bvaughn.me/resume.pdf"
          title="Download my resume"
        >
          <Icon className="w-6 h-6" type="download-resume" />
        </a>
      </div>
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
      className={
        active
          ? "p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg text-gray-400 hover:bg-gray-800"
          : "p-1.5 transition-colors duration-200 rounded-lg text-blue-400 bg-gray-800"
      }
      {...rest}
    >
      <Icon className="w-6 h-6" type={icon} />
    </Link>
  );
}
