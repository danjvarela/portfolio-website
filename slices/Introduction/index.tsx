import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import GradientText from "@/components/gradient-text";

export type IntroductionProps = SliceComponentProps<Content.IntroductionSlice>;

const Introduction = ({ slice }: IntroductionProps): JSX.Element => {
  return (
    <div
      className="h-[50vh] flex flex-col items-center justify-end text-center font-gochi"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-4xl md:text-6xl xl:text-8xl">
        Hello, I'm <GradientText>DAN.</GradientText>
      </div>

      <div className="md:text-xl xl:text-4xl">
        {slice.primary.introduction_message}
      </div>
    </div>
  );
};

export default Introduction;
