"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import GradientText from "@/components/gradient-text";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export type IntroductionProps = SliceComponentProps<Content.IntroductionSlice>;

const Introduction = ({ slice }: IntroductionProps): JSX.Element => {
  const [typingStep, setTypingStep] = useState(0);

  return (
    <div
      className="h-[50vh] flex flex-col items-center justify-end text-center font-gochi"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-4xl md:text-6xl xl:text-8xl">
        <TypeAnimation
          sequence={["Hello, I'm ", () => setTypingStep((prev) => prev + 1)]}
          cursor={false}
        />
        <GradientText>
          {typingStep >= 1 && (
            <TypeAnimation
              sequence={["Dan.", () => setTypingStep((prev) => prev + 1)]}
            />
          )}
        </GradientText>
      </div>

      <div className="text-lg md:text-xl xl:text-4xl">
        {typingStep >= 2 && (
          <TypeAnimation
            sequence={[slice.primary.introduction_message as string]}
          />
        )}
      </div>
    </div>
  );
};

export default Introduction;
