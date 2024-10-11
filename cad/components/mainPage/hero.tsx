"use client";
import { Highlight } from "../ui/hero-highlight";

export function HeroHighlight() {
  return (
    <>
      <div className="pb-4 justify-center items-center flex">
        <span className="text-4xl">From</span>{" "}
        <Highlight className="text-black dark:text-white text-6xl font-semibold">
          Chaos to Clarity <br />
        </Highlight>
      </div>
      <span className="text-4xl">
        {" "}
        Clavel Advertising Marketing’s and VA Services{" "}
      </span>
      <br />
      <span className="text-xl font-medium justify-center items-center flex pt-4">
        Focus on what matters with seamless support.
      </span>
    </>
  );
}
