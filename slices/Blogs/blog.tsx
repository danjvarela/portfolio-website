import { Content } from "@prismicio/client";
import Link from "next/link";

export default function Blog({
  title,
  date_published,
}: Content.BlogDocument["data"]) {
  return (
    <div className="prose-h2:mt-4 prose-h2:mb-0 mb-8 prose-headings:font-sans">
      <h2 className="flex flex-col">{title}</h2>

      <div className="text-xs text-rx-slatedark11 font-normal">
        <div className="flex items-center gap-2">
          <span>Posted 2 days ago</span>
          <span>•</span>
          <span>2 min read</span>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <Link href="">#hello</Link>
          <Link href="">#hello</Link>
          <Link href="">#hello</Link>
          <Link href="">#hello</Link>
        </div>
      </div>
    </div>
  );
}
