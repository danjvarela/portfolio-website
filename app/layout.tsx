import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Gochi_Hand, Inter } from "next/font/google";
import Providers from "./providers";

const gochi = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dan Varela",
  description: "Dan Varela's Portfolio Website",
};

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
          "font-sans dark:text-rx-slatedark12 text-rx-slatelight12",
          "dark:bg-rx-slatedark2 bg-rx-slatelight2",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
