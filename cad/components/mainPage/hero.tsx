"use client";
import { Highlight } from "../ui/hero-highlight";

export function HeroHighlight() {
  return (
    <>
      <div>
        From{" "}
        <Highlight className="text-black dark:text-white">
          Chaos to Clarity <br />
        </Highlight>
      </div>
      Clavel Advertising Marketing’s and VA Services <br />
      <span className="text-base font-medium">
        Focus on what matters with seamless support.
      </span>
    </>
  );
}
