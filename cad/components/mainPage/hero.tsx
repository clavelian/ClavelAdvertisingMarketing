"use client";
import { Highlight } from "../ui/hero-highlight";

export function HeroHighlight() {
  return (
    <>
      <div className="pb-4 justify-center items-center flex">
        <span className="text-4xl tablet:text-3xl mobile:text-2xl">From</span>{" "}
        <Highlight className="text-black dark:text-white text-6xl font-semibold mobile:text-4xl tablet:text-5xl">
          Chaos to Clarity <br />
        </Highlight>
      </div>{" "}
      <span className="text-4xl tablet:text-3xl mobile:text-xl text-nowrap">
        Clavel Advertising Marketing&apos;s and VA Services
      </span>
      <br />
      <span className="text-xl tablet:text-base mobile:text-sm  font-medium justify-center items-center flex pt-2">
        Focus on what matters with seamless support.
      </span>
    </>
  );
}
