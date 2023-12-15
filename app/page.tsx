import Header from "@/components/layout/header";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { pick, omit } from "lodash";

export default async function HomePage() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <div className="flex flex-col h-fit">
      <SliceZone
        slices={page.data.slices.filter(
          (slice) => slice.slice_type === "introduction",
        )}
        components={pick(components, "introduction")}
      />

      <div className="relative">
        <Header />

        <SliceZone
          slices={page.data.slices.filter(
            (slice) => slice.slice_type !== "introduction",
          )}
          components={omit(components, "introduction")}
        />
      </div>
    </div>
  );
}
