import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans, Instrument_Sans } from "next/font/google";
import { cn } from "@/utils/cn";

const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Dan Varela",
  description: "Dan Varela's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          nunito.variable,
          instrumentSans.variable,
          "font-default min-h-screen prose prose-slate text-slate-11 max-w-none",
          "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-3 to-blue-1",
        )}
      >
        {children}
      </body>
    </html>
  );
}
