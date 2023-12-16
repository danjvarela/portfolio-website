import { cn } from "@/lib/utils";
import { PrismicNavLink } from "@/components/nav-link";
import { ExternalLink } from "lucide-react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

export default function Project({
  image,
  title,
  description,
  link,
  source_code_link,
  technologies_used,
}: Content.ProjectDocument["data"]) {
  return (
    <div className={cn("w-full bg-rx-slatedark3 rounded-lg overflow-hidden")}>
      <div
        className="aspect-[1.618] bg-rx-slatedark1 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${image.url})`,
        }}
      ></div>
      <div className="p-4">
        <h3 className="!font-sans mt-0">{title}</h3>
        <div className="prose-p:mb-0">
          <PrismicRichText field={description} />
        </div>
        <p className="flex gap-4 mb-0">
          {isFilled.link(link) && (
            <div className="flex">
              <PrismicNavLink text="Visit" className="not-prose" field={link} />
              <ExternalLink className="w-3 h-3" />
            </div>
          )}

          {isFilled.link(source_code_link) && (
            <div className="flex">
              <PrismicNavLink
                text="Source Code"
                className="not-prose"
                field={source_code_link}
              />
              <ExternalLink className="w-3 h-3" />
            </div>
          )}
        </p>

        <p className="flex flex-wrap mb-0 gap-2">
          {technologies_used.map((technology) => (
            <div
              key={technology.name}
              className="text-[10px] bg-rx-slatedark1 py-1 px-2 rounded-full leading-none select-none"
            >
              {technology.name}
            </div>
          ))}
        </p>
      </div>
    </div>
  );
}
