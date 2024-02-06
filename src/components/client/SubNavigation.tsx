import { ReactNode } from "react";

export function SubNavigation({
  header,
  links,
}: {
  header: string;
  links: ReactNode;
}) {
  return (
    <nav className="flex flex-row flex-wrap items-center md:items-start md:flex-col flex-auto max-h-svh p-2 md:py-3 md:px-0 md:gap-4 overflow-auto bg-gray-800 shrink-0">
      <div className="px-4 text-lg font-medium text-white hidden md:block">
        {header}
      </div>

      {links}
    </nav>
  );
}
