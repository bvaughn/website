import { ReactNode } from "react";

export function SubNavigationLink({
  href,
  children,
  isActive,
  isExternal,
}: {
  href: string;
  children: ReactNode;
  isActive?: boolean;
  isExternal?: boolean;
}) {
  return (
    <a
      className={`flex shrink-0 md:w-full items-center mx:w-full p-2 md:px-4 md:py-0 rounded transition-colors duration-200 gap-x-2 focus:outline-none ${
        isActive
          ? "text-blue-300"
          : "text-white hover:text-blue-200 focus:text-blue-200"
      }`}
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      tabIndex={0}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
