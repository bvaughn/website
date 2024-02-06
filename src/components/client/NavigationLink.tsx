import { Icon, IconType } from "@/components/shared/Icon";
import Link from "next/link.js";
import { ComponentPropsWithoutRef } from "react";

export function NavigationLink({
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
          ? "text-blue-200 focus:bg-gray-800 focus:outline-none"
          : "text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline focus:outline-blue-200"
      }`}
      {...rest}
    >
      <Icon className="w-6 h-6" type={icon} />

      <span className="md:hidden">{label}</span>
    </Link>
  );
}
