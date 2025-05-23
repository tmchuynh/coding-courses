"use client";
import { motion, useScroll, useTransform } from "motion/react";
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
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="bg-white dark:bg-neutral-950 md:px-10 w-full font-sans"
      ref={containerRef}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-10 py-20 max-w-7xl">
        <h2 className="mb-4 max-w-4xl text-black text-lg md:text-4xl dark:text-white">
          Changelog from my journey
        </h2>
        <p className="max-w-sm text-neutral-700 text-sm md:text-base dark:text-neutral-300">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto pb-20 max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start md:gap-10 pt-10 md:pt-40"
          >
            <div className="top-40 z-40 sticky flex md:flex-row flex-col items-center md:w-full max-w-xs lg:max-w-sm self-start">
              <div className="left-3 md:left-3 absolute flex justify-center items-center bg-white dark:bg-black rounded-full w-10 h-10">
                <div className="bg-neutral-200 dark:bg-neutral-800 p-2 border border-neutral-300 dark:border-neutral-700 rounded-full w-4 h-4" />
              </div>
              <h3 className="md:block hidden md:pl-20 font-bold text-neutral-500 text-xl md:text-5xl dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pr-4 pl-20 md:pl-4 w-full">
              <h3 className="block md:hidden mb-4 font-bold text-2xl text-left text-neutral-500 dark:text-neutral-500">
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
          className="top-0 left-8 md:left-8 absolute bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-[0%] from-transparent via-neutral-200 dark:via-neutral-700 to-[99%] to-transparent w-[2px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="top-0 absolute inset-x-0 bg-gradient-to-t from-[0%] from-purple-500 via-[10%] via-blue-500 to-transparent rounded-full w-[2px]"
          />
        </div>
      </div>
    </div>
  );
};
