import { headerHeight } from "@/lib/constants";
import GradientText from "../gradient-text";
import Link from "next/link";

export default async function BlogsHeader() {
  return (
    <header style={{ height: headerHeight }}>
      <div className="h-full flex items-center justify-between mx-auto max-w-4xl">
        <Link href="/">
          <GradientText className="font-gochi text-2xl font-bold">
            Dan Varela
          </GradientText>
        </Link>
      </div>
    </header>
  );
}
