import { PrismicNavLink } from "@/components/nav-link";
import { ExternalLink } from "lucide-react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export default function Project({
  image,
  title,
  description,
  link,
  source_code_link,
  technologies_used,
}: Content.ProjectDocument["data"]) {
  return (
    <div className="w-full">
      <div className="aspect-[1.618] bg-rx-slatedark1 relative w-full border-4 rounded-lg border-rx-slatedark4">
        <PrismicNextImage
          field={image}
          className="object-cover not-prose rounded-[inherit]"
          quality={100}
          fill
          sizes="100vw"
        />
      </div>

      <PrismicNavLink
        field={link}
        text={title as string}
        className="no-underline mt-4 font-bold text-lg md:text-2xl"
      />

      <PrismicRichText field={description} />

      <div className="flex gap-4 my-4">
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
      </div>

      <div className="flex flex-wrap mb-0 gap-2">
        {technologies_used.map((technology) => (
          <div
            key={technology.name}
            className="text-[10px] bg-rx-slatedark1 py-1 px-2 rounded-full leading-none select-none"
          >
            {technology.name}
          </div>
        ))}
      </div>
    </div>
  );
}
