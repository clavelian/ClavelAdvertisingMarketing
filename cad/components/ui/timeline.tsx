"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-bgcolor-50 dark:bg-bgcolor-100 font-sans exclude:px-10"
      ref={containerRef}
    >
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto py-10 px-4 exclude:px-10">
          <h2 className="text-2xl exclude:text-4xl mb-4 text-black dark:text-white mobile:justify-center justify-center items-center font-semibold pb-10 flex">
            Our Services
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm exclude:text-base mobile:max-w-sm max-w-none text-justify">
            At Clavel Advertising Marketing, we believe that every brand has a
            unique story to tell. Our exceptional content writing and graphic
            design services help you share your story in the most engaging and
            impactful way possible. We understand the demands of a thriving
            agency/company, which is why our virtual assistants are here to
            handle administrative tasks, freeing you up to focus on what you do
            best.
          </p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 exclude:pt-40 exclude:gap-10"
          >
            {/* circle */}
            <div className="sticky flex flex-col exclude:flex-row z-40 items-center top-40 self-start max-w-xs exclude:max-w-sm exclude:w-full mobile:hidden">
              {/* → */}
              <div className="h-10 absolute left-3 exclude:left-3 w-10 rounded-full bg-slate-600 dark:bg-slate-300 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* circle font */}
              <h3 className="hidden exclude:block text-xl exclude:pl-20 exclude:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 exclude:pl-4 w-full">
              <h3 className="exclude:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute exclude:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[10px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
