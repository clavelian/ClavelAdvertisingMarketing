"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mobile:text-2xl px-4 exclude:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        From{" "}
        <Highlight className="text-black dark:text-white">
          Chaos to Clarity <br />
        </Highlight>
        Clavel Advertising Marketing’s and VA Services <br />
        <span className="text-base">
          Focus on what matters with seamless support.
        </span>
      </motion.h1>
    </HeroHighlight>
  );
}
