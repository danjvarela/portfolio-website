import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Gochi_Hand, Inter } from "next/font/google";
import Providers from "./providers";
import { createClient } from "@/prismicio";

const gochi = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    metadataBase: new URL("https://danvarela.com"),
    title: settings.data.site_title || "Dan Varela",
    description:
      settings.data.site_description ||
      "Dan Varela's Portfolio Website and Blog",
    keywords: settings.data.site_keywords,
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          gochi.variable,
          inter.variable,
          "font-sans text-rx-slatedark12 bg-rx-slatedark2",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
