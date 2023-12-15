import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";
import { PrismicNextLink } from "@prismicio/next";

const sharedClassName = cn(
  "flex gap-2 items-center",
  "transition-colors text-rx-cyanlight11 hover:text-rx-cyanlight12 relative w-fit",
  "dark:text-rx-cyandark11 dark:hover:text-rx-cyandark12 overflow-hidden",
  "before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:-translate-x-full",
  "before:bg-rx-cyanlight12 dark:before:bg-rx-cyandark12",
  "before:hover:translate-x-0 before:transition-transform",
);

type NavLinkProps = Omit<ComponentProps<typeof Link>, "href" | "children"> & {
  href?: string;
  text: string;
  icon?: JSX.Element;
};

export function NavLink({
  className,
  text,
  href,
  icon,
  ...props
}: NavLinkProps) {
  return (
    <Link
      className={cn(sharedClassName, className)}
      href={href || ""}
      {...props}
    >
      {icon}
      {text}
    </Link>
  );
}

type PrismicNextLinkProps = ComponentProps<typeof PrismicNextLink> & {
  text: string;
  icon?: JSX.Element;
};

export function PrismicNavLink({
  className,
  text,
  icon,
  ...props
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink className={cn(sharedClassName, className)} {...props}>
      {icon}
      {text}
    </PrismicNextLink>
  );
}
