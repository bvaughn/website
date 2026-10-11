import { Icon, type IconType } from "@/components/shared/Icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Brian Vaughn",
};

const LINKS: { handle: string; href: string; icon: IconType; label: string }[] =
  [
    {
      handle: "brian.david.vaughn@gmail.com",
      href: "mailto:brian.david.vaughn@gmail.com",
      icon: "email",
      label: "Email",
    },
    {
      handle: "bvaughn.me",
      href: "https://www.bvaughn.me/",
      icon: "home",
      label: "Website",
    },
    {
      handle: "@brian.blue",
      href: "https://bsky.app/profile/brian.blue",
      icon: "blue-sky",
      label: "Bluesky",
    },
    {
      handle: "bvaughn",
      href: "https://github.com/bvaughn/",
      icon: "github",
      label: "GitHub",
    },
    {
      handle: "@brian.david.vaughn",
      href: "https://www.threads.net/@brian.david.vaughn",
      icon: "threads",
      label: "Threads",
    },
    {
      handle: "brian.david.vaughn",
      href: "https://www.facebook.com/brian.david.vaughn",
      icon: "facebook",
      label: "Facebook",
    },
    {
      handle: "briandavidvaughn",
      href: "https://www.linkedin.com/in/briandavidvaughn/",
      icon: "linked-in",
      label: "LinkedIn",
    },
  ];

export default function Contact() {
  return (
    <main className="pb-14 pt-2 sm:pb-[88px] sm:pt-4 lg:pt-8">
      <h1 className="heading text-[46px] leading-[0.95] sm:text-[68px] lg:text-[88px]">
        Say hi.
        <br />
        <span className="text-muted">I&apos;m around.</span>
      </h1>
      <p className="mt-6 max-w-[480px] text-fg-soft">
        You can find me online in a few places. Please say hi!
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {LINKS.map(({ handle, href, icon, label }) => (
          <li key={label}>
            <a
              className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-4 transition-colors hover:border-subtle"
              href={href}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              target={href.startsWith("http") ? "_blank" : undefined}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-panel-raised text-accent">
                <Icon aria-hidden="true" className="h-6 w-6" type={icon} />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">{label}</span>
                <span className="block truncate text-sm text-subtle">
                  {handle}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
