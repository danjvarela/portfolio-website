import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function GradientText({
  children,
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-rx-cyanlight9 to-rx-purplelight9",
        "dark:from-rx-cyandark9 dark:to-rx-purpledark9",
        "inline-block text-transparent bg-clip-text",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
