"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Separator as RxSeparator } from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

export type SeparatorProps = ComponentPropsWithoutRef<typeof RxSeparator>;

const Separator = forwardRef<ElementRef<typeof RxSeparator>, SeparatorProps>(
  ({ className, orientation, ...props }, ref) => {
    return (
      <RxSeparator
        className={cn(
          "bg-rx-slatedark7",
          orientation === "horizontal" && "h-px w-full",
          orientation === "vertical" && "w-px h-full",
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

Separator.displayName = "Separator";

export { Separator };
