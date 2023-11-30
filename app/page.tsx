import GradientText from "@/components/gradient-text";
import NavLink from "@/components/home/nav-link";
import ThemeSwitcher from "@/components/theme-switcher";
import { cn } from "@/lib/utils";
import { Linkedin, LucideProps, Twitter, Mail } from "lucide-react";

const iconProps: LucideProps = {
  className: "w-4 h-4 mb-[2px]",
};

export default function Home() {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 w-1/2 dark:bg-rx-slatedark1 bg-rx-slatelight1",
          "flex justify-end z-50",
        )}
      >
        <div className="w-full max-w-lg h-full pt-24 pb-12 flex flex-col justify-between">
          <div>
            <div className="text-6xl">
              Hello, I'm <GradientText>DAN.</GradientText>
            </div>
            <div className="text-2xl">
              I build stuff for the web and I love cats &#x1F43E;.
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <NavLink text="About me" />
            <NavLink text="My works" />
            <NavLink text="Blogs" />
            <NavLink text="Resume" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-2xl">Contact me on...</div>
            <div className="flex gap-8">
              <NavLink
                text="Linkedin"
                className="text-lg"
                icon={<Linkedin {...iconProps} />}
              />
              <NavLink
                text="Twitter"
                className="text-lg"
                icon={<Twitter {...iconProps} />}
              />
              <NavLink
                text="Email"
                className="text-lg"
                icon={<Mail {...iconProps} />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div className="w-1/2 px-8 pt-24 pb-20 flex flex-col gap-20">
          <section>
            <h1 className="text-4xl mb-8" id="about-me">
              About me
            </h1>
            <p className="font-sans">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </section>

          <section>
            <h1 className="text-4xl mb-8" id="my-works">
              My works
            </h1>
            <p className="font-sans">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </section>

          <section>
            <h1 className="text-4xl mb-8" id="my-works">
              Blogs
            </h1>
            <p className="font-sans">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </section>

          <section>
            <h1 className="text-4xl mb-8" id="my-works">
              Resume
            </h1>
            <p className="font-sans">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </section>
        </div>
      </div>

      <div className="fixed right-8 top-8">
        <ThemeSwitcher />
      </div>
    </>
  );
}
