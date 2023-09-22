"use client";

import {
  Root,
  Trigger,
  Portal,
  Arrow,
  Content,
} from "@radix-ui/react-hover-card";
import Image from "next/image";
import Link from "./link";
import { cn } from "@/utils/cn";

export default function HoverableLuffy() {
  return (
    <Root openDelay={200}>
      <Trigger asChild>
        <Link href="#" onClick={(e) => e.preventDefault()}>
          Land of Wano
        </Link>
      </Trigger>
      <Portal>
        <Content
          className={cn(
            "w-[320px] aspect-[600/336] bg-mint-11",
            "p-2 rounded-xl",
          )}
          side="top"
        >
          <div className="relative w-full h-full rounded-[inherit] overflow-hidden">
            <Image
              src="/luffy.png"
              alt="I will be waiting for you in the land of Wano"
              layout="fill"
              objectFit="contain"
              className="inset-0 m-0"
            />
          </div>
          <Arrow className="fill-mint-11" />
        </Content>
      </Portal>
    </Root>
  );
}
