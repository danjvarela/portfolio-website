"use client";

import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? "Toggle Dark Theme" : "Toggle Light Theme"}
    </button>
  );
}
