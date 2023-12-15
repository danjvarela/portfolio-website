import { createClient } from "@/prismicio";
import Section from "../layout/section";

export default async function AboutMe() {
  const client = createClient();
  const aboutMe = await client.getSingle("about_me");

  return (
    <Section id={aboutMe.data.section_id?.toString()}>
      {aboutMe.data.content.map((item) => {
        if (item.type === "heading1") return <h1>{item.text}</h1>;
        if (item.type === "paragraph") return <p>{item.text}</p>;
      })}
    </Section>
  );
}
