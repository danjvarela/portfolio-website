import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Section from "@/components/layout/section";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/prismicio";
import Blog from "./blog";
import { Fragment } from "react";

export type BlogsProps = SliceComponentProps<Content.BlogsSlice>;

const Blogs = async ({ slice }: BlogsProps): Promise<JSX.Element> => {
  const client = createClient();

  const blogs = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.blog) && item.blog.uid) {
        return client.getByUID("blog", item.blog.uid);
      }
    }),
  );

  return (
    <Section
      id={slice.primary.section_id || ""}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{slice.primary.section_title}</h1>

      {blogs.map((blog, i) => {
        return (
          blog && (
            <Fragment key={blog.id}>
              <Blog {...blog.data} />
              {i < blogs.length - 1 && <Separator orientation="horizontal" />}
            </Fragment>
          )
        );
      })}
    </Section>
  );
};

export default Blogs;
