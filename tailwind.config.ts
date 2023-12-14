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

  ...renameKeys("purple", radixColors.purple),
  ...renameKeys("purple", radixColors.purpleA),
  ...renameKeys("purple", radixColors.purpleDark, "dark"),
  ...renameKeys("purple", radixColors.purpleDarkA, "dark"),
};

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        gochi: ["var(--font-gochi)"],
      },
      colors: {
        ...rColors,
      },
      typography: () => {
        return {
          DEFAULT: {
            css: {
              "--tw-prose-body": rColors["rx-slatelight12"],
              "--tw-prose-headings": rColors["rx-slatelight12"],
              "--tw-prose-lead": rColors["rx-slatelight12"],
              "--tw-prose-links": rColors["rx-slatelight12"],
              "--tw-prose-bold": rColors["rx-slatelight12"],
              "--tw-prose-counters": rColors["rx-slatelight12"],
              "--tw-prose-bullets": rColors["rx-slatelight12"],
              "--tw-prose-hr": rColors["rx-slatelight12"],
              "--tw-prose-quotes": rColors["rx-slatelight12"],
              "--tw-prose-quote-borders": rColors["rx-slatelight12"],
              "--tw-prose-captions": rColors["rx-slatelight12"],
              "--tw-prose-code": rColors["rx-slatelight12"],
              "--tw-prose-pre-code": rColors["rx-slatelight12"],
              "--tw-prose-pre-bg": rColors["rx-slatelight12"],
              "--tw-prose-th-borders": rColors["rx-slatelight7"],
              "--tw-prose-td-borders": rColors["rx-slatelight7"],
              "--tw-prose-invert-body": rColors["rx-slatedark12"],
              "--tw-prose-invert-headings": rColors["rx-slatedark12"],
              "--tw-prose-invert-lead": rColors["rx-slatedark12"],
              "--tw-prose-invert-links": rColors["rx-slatedark12"],
              "--tw-prose-invert-bold": rColors["rx-slatedark12"],
              "--tw-prose-invert-counters": rColors["rx-slatedark12"],
              "--tw-prose-invert-bullets": rColors["rx-slatedark12"],
              "--tw-prose-invert-hr": rColors["rx-slatedark12"],
              "--tw-prose-invert-quotes": rColors["rx-slatedark12"],
              "--tw-prose-invert-quote-borders": rColors["rx-slatedark7"],
              "--tw-prose-invert-captions": rColors["rx-slatedark12"],
              "--tw-prose-invert-code": rColors["rx-slatedark12"],
              "--tw-prose-invert-pre-code": rColors["rx-slatedark12"],
              "--tw-prose-invert-pre-bg": rColors["rx-slatedark3"],
              "--tw-prose-invert-th-borders": rColors["rx-slatedark7"],
              "--tw-prose-invert-td-borders": rColors["rx-slatedark7"],
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

export default config;
