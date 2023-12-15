import Header from "@/components/layout/header";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { pick, omit } from "lodash";
import Section from "@/components/layout/section";
import {
  SiGmail,
  SiLinkedin,
  SiTelegram,
} from "@icons-pack/react-simple-icons";
import { NavLink } from "@/components/nav-link";
import { Separator } from "@/components/ui/separator";

export default async function HomePage() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <div className="flex flex-col h-fit">
      <SliceZone
        slices={page.data.slices.filter(
          (slice) => slice.slice_type === "introduction",
        )}
        components={pick(components, "introduction")}
      />

      <div className="relative">
        <Header />

        <SliceZone
          slices={page.data.slices.filter(
            (slice) => slice.slice_type !== "introduction",
          )}
          components={omit(components, "introduction")}
        />

        <Section id="contact-me" className="mb-8">
          <h1>Let's keep in touch</h1>
          <div className="flex gap-8 flex-wrap not-prose font-gochi text-xl">
            <NavLink
              text="LinkedIn"
              href="https://www.linkedin.com/in/danmar-varela-8097a9242/"
              icon={<SiLinkedin className="w-4 h-4 mb-1" />}
              target="_blank"
            />
            <NavLink
              text="Email"
              href="mailto:vareladanmarj@gmail.com"
              icon={<SiGmail className="w-4 h-4 mb-1" />}
              target="_blank"
            />
            <NavLink
              text="Telegram"
              href="https://telegram.me/danwtfizdiz"
              icon={<SiTelegram className="w-4 h-4 mb-1" />}
              target="_blank"
            />
          </div>
        </Section>

        <footer className="max-w-2xl h-full mx-auto p-4 prose prose-p:text-sm">
          <Separator orientation="horizontal" className="mb-4" />
          <p>
            Made with Next.js, Typescript, TailwindCSS, and Radix UI. Content
            managed by Prismic.io
          </p>
        </footer>
      </div>
    </div>
  );
}
