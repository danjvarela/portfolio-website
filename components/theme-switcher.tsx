"use client";

import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";
import wandDark from "@/assets/wand-dark.png";
import wandLight from "@/assets/wand-light.png";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const isClient = useIsClient();

  const cursor = resolvedTheme === "light" ? wandDark : wandLight;

  if (!isClient) return null;

  return (
    <button
      className={cn(
        "transition px-4 py-2 rounded-full hover:bg-rx-slatelight4 dark:hover:bg-rx-slatedark4 flex gap-2",
        "bg-rx-slatelight3 dark:bg-rx-slatedark3",
      )}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      style={{
        cursor: `url(${cursor.src}), pointer`,
      }}
    >
      {resolvedTheme === "light" ? <Moon /> : <Sun />}
      {resolvedTheme === "light" ? "Nox!" : "Lumos!"}
    </button>
  );
}
