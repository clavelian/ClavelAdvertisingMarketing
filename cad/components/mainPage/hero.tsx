"use client";
import { Highlight } from "../ui/hero-highlight";

export function HeroHighlight() {
  return (
    <>
      <div className="pb-4 justify-center items-center flex">
        <span className="text-4xl tablet:text-3xl mobile:text-2xl">
          <p className="text-white">From</p>
        </span>{" "}
        <Highlight className="text-white text-6xl font-semibold mobile:text-4xl tablet:text-5xl">
          Chaos to Clarity <br />
        </Highlight>
      </div>{" "}
      <span className="text-4xl tablet:text-3xl mobile:text-xl text-nowrap">
        <p className="text-white">
          Clavel Advertising Marketing&apos;s and VA Services
        </p>
      </span>
      <span className="text-xl tablet:text-base mobile:text-sm  font-medium justify-center items-center flex pt-4">
        <p className="text-white">
          Focus on what matters with seamless support.
        </p>
      </span>
    </>
  );
}
