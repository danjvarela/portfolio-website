import therapeaseph from "@/assets/works/therapeaseph.png";
import { cn } from "@/lib/utils";
import NavLink from "./nav-link";
import { ExternalLink } from "lucide-react";

export default function Work() {
  return (
    <div
      className={cn(
        "w-full bg-rx-slatelight3 dark:bg-rx-slatedark3 rounded-lg overflow-hidden",
      )}
    >
      <div
        className="aspect-[1.618] bg-rx-slatelight1 dark:bg-rx-slatedark1 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${therapeaseph.src})`,
        }}
      ></div>
      <div className="p-4">
        <h3 className="!font-sans mt-0">TherapEase PH</h3>
        <p className="mb-0 text-rx-slatedark11">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p className="flex gap-4 mb-0">
          <div className="flex">
            <NavLink text="Visit" className="not-prose" />
            <ExternalLink className="w-3 h-3" />
          </div>

          <div className="flex">
            <NavLink text="Source Code" className="not-prose" />
            <ExternalLink className="w-3 h-3" />
          </div>
        </p>

        <p className="flex flex-wrap mb-0 gap-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="text-[10px] bg-rx-slatelight1 dark:bg-rx-slatedark1 py-1 px-2 rounded-full leading-none select-none"
            >
              React
            </div>
          ))}
        </p>
      </div>
    </div>
  );
}
