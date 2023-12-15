import GradientText from "../gradient-text";
import { createClient } from "@/prismicio";

export default async function Introduction() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div className="h-[50vh] flex flex-col items-center justify-end text-center font-gochi">
      <div className="text-4xl md:text-6xl xl:text-8xl">
        Hello, I'm <GradientText>DAN.</GradientText>
      </div>

      <div className="md:text-xl xl:text-4xl">
        {settings.data.introduction_message}
      </div>
    </div>
  );
}
