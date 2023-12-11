"use client";

import GradientText from "@/components/gradient-text";
import NavLink from "@/components/home/nav-link";
import { Separator } from "@/components/ui/separator";

const headerHeight = 60;

export default function HomePage() {
  return (
    <div className="flex flex-col h-fit">
      <div className="h-[100vh] flex flex-col items-center justify-center text-center">
        <div className="text-4xl md:text-6xl xl:text-8xl">
          Hello, I'm <GradientText>DAN.</GradientText>
        </div>

        <div className="md:text-xl xl:text-4xl">
          I build stuff for the web and I love cats &#x1F43E;.
        </div>

        <div
          className="flex gap-4 items-center justify-center py-4 sticky top-0 text-sm md:text-xl"
          style={{ height: headerHeight }}
        >
          <NavLink text="About me" href="#about-me" />
          <Separator orientation="vertical" />
          <NavLink text="My works" href="#my-works" />
          <Separator orientation="vertical" />
          <NavLink text="Blogs" href="#blogs" />
          <Separator orientation="vertical" />
          <NavLink text="Resume" href="#resume" />
        </div>
      </div>
      <div style={{ height: `calc(100vh - ${headerHeight}px)` }}></div>
    </div>
  );
}
