import BlogsHeader from "@/components/layout/blogs-header";
import { PropsWithChildren } from "react";

export default function BlogsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <BlogsHeader />
      {children}
    </>
  );
}
