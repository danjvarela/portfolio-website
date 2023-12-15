import Section from "@/components/layout/section";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type AboutMeProps = SliceComponentProps<Content.AboutMeSlice>;

const AboutMe = ({ slice }: AboutMeProps): JSX.Element => {
  return (
    <Section
      id={slice.primary.section_id || ""}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.content} />
    </Section>
  );
};

export default AboutMe;
