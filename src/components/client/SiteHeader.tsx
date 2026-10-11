"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  isActive: (pathname: string) => boolean;
  isExternal?: boolean;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    isActive: (pathname) =>
      pathname === "/" || pathname.startsWith("/music/brian-vaughn"),
    label: "Music",
  },
  {
    href: "/#bands",
    isActive: (pathname) =>
      pathname.startsWith("/music/") &&
      !pathname.startsWith("/music/brian-vaughn"),
    label: "Bands",
  },
  {
    href: "/contact",
    isActive: (pathname) => pathname.startsWith("/contact"),
    label: "Contact",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu after navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between gap-4 py-3 sm:py-6">
      <Link
        className="relative z-50 text-lg font-bold tracking-tight sm:text-xl"
        href="/"
      >
        brian vaughn
      </Link>

      <nav aria-label="Main" className="hidden gap-7 sm:flex">
        {NAV_ITEMS.map((item) => (
          <NavLink item={item} key={item.href} pathname={pathname} />
        ))}
      </nav>

      <button
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full sm:hidden ${
          isMenuOpen ? "bg-fg text-ink" : "border border-line"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
      >
        <svg
          aria-hidden="true"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.8}
          viewBox="0 0 18 18"
        >
          {isMenuOpen ? (
            <path d="M4 4l10 10M14 4L4 14" />
          ) : (
            <path d="M3 6h12M3 12h12" />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-ink px-4 pt-20 sm:hidden">
          <nav aria-label="Main" className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const isActive = item.isActive(pathname);
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-baseline justify-between border-b border-divider py-3.5 text-[44px] font-bold leading-tight tracking-tighter ${
                    isActive ? "text-fg" : "text-muted"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  {...externalProps(item)}
                >
                  {item.label}
                  {isActive && (
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = item.isActive(pathname);
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={`border-b-2 py-2.5 ${
        isActive
          ? "border-accent text-fg"
          : "border-transparent text-muted hover:text-fg"
      }`}
      href={item.href}
      {...externalProps(item)}
    >
      {item.label}
    </Link>
  );
}

function externalProps(item: NavItem) {
  return item.isExternal
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};
}
