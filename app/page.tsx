import ThemeSwitcher from "@/components/theme-switcher";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="fixed w-[28rem] h-screen border right-1/2 pt-16 px-4">
        <div
          className={cn(
            "font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-rx-cyanlight9 to-rx-cyanlight12",
            "dark:from-rx-cyandark9 dark:to-rx-cyandark12",
          )}
        >
          Dan Varela
        </div>
        <div className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rx-cyanlight9 to-rx-cyanlight12">
          Web Developer
        </div>
      </div>

      <div className="w-[28rem] h-[300vh] border ml-[50%]"></div>
      <div className="fixed bottom-12 right-8">
        <ThemeSwitcher />
      </div>
    </>
  );
}
