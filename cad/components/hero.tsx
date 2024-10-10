"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandX,
  IconHome,
  IconBrandInstagram,
  IconMail,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandTiktokFilled,
} from "@tabler/icons-react";
import Fb from "@/public/fb.svg";

export function HeroHighlightDemo() {
  return (
    <>
      <HeroHighlight className="">
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: [50, -5, 0],
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
          <span className="w-full h-[6rem] text-white flex items-center justify-center pt-6">
            <div className="bg-blue-600 hover:bg-blue-600 transition ease-in-out delay-150 w-[3rem] h-[3rem] justify-center items-center flex">
              <IconBrandFacebook />
            </div>
            <div className="bg-black transition ease-in-out delay-150 w-[3rem] h-[3rem] justify-center items-center flex">
              <IconBrandTiktok />
            </div>
            <div className="bg-blue-500 transition ease-in-out delay-150 w-[3rem] h-[3rem] justify-center items-center flex">
              <IconBrandTwitter />
            </div>
          </span>
        </motion.h1>
      </HeroHighlight>
    </>
  );
}
