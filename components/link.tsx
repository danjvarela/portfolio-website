import { cn } from "@/utils/cn";
import NextLink from "next/link";
import React from "react";

const Link = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink>
>(({ className, children, ...props }, ref) => {
  return (
    <NextLink
      className={cn(
        "w-fit text-mint-12 hover:text-mint-11 no-underline transition",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </NextLink>
  );
});

export default Link;
