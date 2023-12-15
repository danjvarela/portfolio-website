"use client";

import GradientText from "@/components/gradient-text";
import { NavLink } from "@/components/nav-link";
import { Separator } from "@/components/ui/separator";
import { headerHeight } from "@/lib/constants";
import { motion } from "framer-motion";
import Section from "@/components/layout/section";
import { cn } from "@/lib/utils";
import Work from "@/components/project";
import {
  SiFacebook,
  SiGmail,
  SiLinkedin,
  SiTelegram,
} from "@icons-pack/react-simple-icons";

export default function HomePage() {
  return (
    <div className="flex flex-col h-fit">
      <div className="h-[50vh] flex flex-col items-center justify-end text-center font-gochi">
        <div className="text-4xl md:text-6xl xl:text-8xl">
          Hello, I'm <GradientText>DAN.</GradientText>
        </div>

        <div className="md:text-xl xl:text-4xl">
          I build stuff for the web and I love cats &#x1F43E;.
        </div>
      </div>

      <div className="relative">
        <motion.div
          className={cn(
            "flex gap-4 items-center justify-center py-4 sticky top-0 text-sm md:text-xl font-gochi",
            "bg-rx-slatelight2/75 dark:bg-rx-slatedark2/75 backdrop-blur z-50",
          )}
          layoutId="header"
          style={{ height: headerHeight }}
        >
          <NavLink text="About me" href="#about-me" />
          <Separator orientation="vertical" />
          <NavLink text="My works" href="#my-works" />
          <Separator orientation="vertical" />
          <NavLink text="Contact me" href="#contact-me" />
        </motion.div>
        <div
          className="bg-rx-slatelight2 dark:bg-rx-slatedark2"
          style={{
            height: `calc(50vh - ${headerHeight}px)`,
          }}
        />
        <Section id="about-me">
          <h1>About me</h1>
          <p>
            My journey started in a job dealing with lots of Excel sheets. It
            was a snooze until I discovered cool Excel tricks using Visual
            Basic. That's when I got hooked on programming.
          </p>

          <p>
            Now, I'm rocking it as a frontend developer here in the Philippines.
            I play around with Typescript, React, and Next.js to make awesome
            stuff. I'm always hungry to learn more techie things. Come hang out
            on my blog and see what I'm up to!
          </p>

          <p>
            Check out my past projects below. They're like my online resume.
            Need someone passionate for your team? I'm your guy. Let's team up
            and make some web magic. Pretty please, hire me?
          </p>

          <p>Catch you later!</p>

          <p>
            ...Oh! did I mention, I like cats? Yeah, such majestic balls of fur.
            I also watch anime or play guitar in my free time.
          </p>
        </Section>

        <Section id="my-works">
          <h1>My Works</h1>
          <div className="flex flex-col gap-8">
            <Work />
            <Work />
            <Work />
            <Work />
          </div>
        </Section>

        <Section id="contact-me" className="mb-8">
          <h1>Let's keep in touch</h1>
          <div className="flex gap-8 flex-wrap not-prose font-gochi text-xl">
            <NavLink
              text="LinkedIn"
              href=""
              icon={<SiLinkedin className="w-4 h-4 mb-1" />}
            />
            <NavLink
              text="Facebook"
              href="#my-works"
              icon={<SiFacebook className="w-4 h-4 mb-1" />}
            />
            <NavLink
              text="Email"
              href=""
              icon={<SiGmail className="w-4 h-4 mb-1" />}
            />
            <NavLink
              text="Telegram"
              href=""
              icon={<SiTelegram className="w-4 h-4 mb-1" />}
            />
          </div>
        </Section>

        <footer className="max-w-2xl h-full mx-auto p-4 prose">
          <Separator orientation="horizontal" className="mb-4" />
          <p>Made with Next.js, TailwindCSS, and Radix UI</p>
        </footer>
      </div>
    </div>
  );
}
