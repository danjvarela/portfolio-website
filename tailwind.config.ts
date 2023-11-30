import type { Config } from "tailwindcss";
import * as radixColors from "@radix-ui/colors";

const renameKeys = (
  color: string,
  radixColorObj: Record<string, string>,
  mode: "light" | "dark" = "light",
) => {
  return Object.keys(radixColorObj).reduce(
    (acc, key) => {
      const suffix = key.replace(color, "");
      const newKey = `rx-${color}${mode}${suffix}`;
      acc[newKey] = radixColorObj[key];
      return acc;
    },
    {} as Record<string, string>,
  );
};

const rColors = {
  ...renameKeys("cyan", radixColors.cyan),
  ...renameKeys("cyan", radixColors.cyanA),
  ...renameKeys("cyan", radixColors.cyanDark, "dark"),
  ...renameKeys("cyan", radixColors.cyanDarkA, "dark"),

  ...renameKeys("slate", radixColors.slate),
  ...renameKeys("slate", radixColors.slateA),
  ...renameKeys("slate", radixColors.slateDark, "dark"),
  ...renameKeys("slate", radixColors.slateDarkA, "dark"),
};

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...rColors,
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
