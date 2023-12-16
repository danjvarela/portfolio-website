import { PrismicNavLink } from "@/components/nav-link";
import { Separator } from "@/components/ui/separator";
import { headerHeight } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { Fragment } from "react";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <>
      <div
        className={cn(
          "flex gap-4 items-center justify-center py-4 sticky top-0 text-sm md:text-xl font-gochi",
          "bg-rx-slatedark2/75 backdrop-blur z-50",
        )}
        style={{ height: headerHeight }}
      >
        {settings.data.navigations.map(({ link, text }, i) => (
          <Fragment key={(text || "") + i}>
            <PrismicNavLink field={link} text={text?.toString() || ""} />
            {i !== settings.data.navigations.length - 1 && (
              <Separator orientation="vertical" />
            )}
          </Fragment>
        ))}
      </div>
      <div
        className="bg-rx-slatedark2"
        style={{
          height: `calc(50vh - ${headerHeight}px)`,
        }}
      />
    </>
  );
}
