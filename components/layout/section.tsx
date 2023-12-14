import { headerHeight } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function Section({
  children,
  className,
  style,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "max-w-2xl h-full mx-auto p-4",
        "prose prose-invert prose-headings:font-gochi",
        className,
      )}
      style={{
        paddingTop: `calc(${headerHeight}px + 2rem)`,
      }}
      {...props}
    >
      {children}
    </section>
  );
}
