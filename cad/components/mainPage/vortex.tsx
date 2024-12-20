"use client";

import React from "react";
import { Vortex } from "../ui/vortex";
import { NavigationMenuDemo } from "../navbar/navmenu";
import { HeroHighlight } from "./hero";

export function VortexDemoSecond() {
  return (
    <>
      <div className="w-full h-full overflow-hidden fixed">
        <Vortex
          backgroundColor="black"
          rangeY={1000}
          particleCount={400}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 exclude:px-10  py-4 w-full h-full"
        >
          <span className="top-0 fixed pt-3 mobile:pt-1 tablet:pt-3">
            <NavigationMenuDemo />
          </span>
          <main className="items-center justify-center mobile:pt-2 tablet:pt-2 -z-10">
            <HeroHighlight />
          </main>
        </Vortex>
      </div>
    </>
  );
}
