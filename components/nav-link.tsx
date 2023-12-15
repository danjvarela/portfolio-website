import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href" | "children"> & {
  href?: string;
  text: string;
  icon?: JSX.Element;
};

export default function NavLink({
  className,
  text,
  href,
  style,
  icon,
  ...props
}: Props) {
  return (
    <Link
      href={href || ""}
      className={cn(
        "flex gap-2 items-center",
        "transition-colors text-rx-cyanlight11 hover:text-rx-cyanlight12 relative w-fit",
        "dark:text-rx-cyandark11 dark:hover:text-rx-cyandark12 overflow-hidden",
        "before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:-translate-x-full",
        "before:bg-rx-cyanlight12 dark:before:bg-rx-cyandark12",
        "before:hover:translate-x-0 before:transition-transform",
        className,
      )}
      {...props}
    >
      {icon}
      {text}
    </Link>
  );
}
