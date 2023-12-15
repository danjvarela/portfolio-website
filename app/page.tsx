import AboutMe from "@/components/home/about-me";
import Introduction from "@/components/home/introduction";
import Header from "@/components/layout/header";

export default function HomePage() {
  return (
    <div className="flex flex-col h-fit">
      <Introduction />

      <div className="relative">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}
