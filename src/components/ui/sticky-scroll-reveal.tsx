"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000000", // slate-900
    "#000100", // black
    "#000000", // neutral-900
  ];
  const linearGradients = [
    "", // cyan-500 to emerald-500
    "", // pink-500 to indigo-500
    "", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex lg:h-[30rem] justify-center space-y-10 lg:space-x-10 overflow-y-auto rounded-md p-10 font-mono"
      ref={ref}
    >
      <div className="div relative hidden items-start px-4 lg:flex">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn("sticky top-10 hidden h-60 lg:block", contentClassName)}
      >
        {content[activeCard].content ?? null}
      </div>

      <div className="relative flex w-full flex-col items-center text-justify lg:hidden">
        {content.map((item, index) => (
          <div key={item.title + index} className="flex flex-col gap-6">
            {/* Content card first */}
            {item.content && (
              <div
                style={{
                  background: linearGradients[index % linearGradients.length],
                }}
                className={cn("", contentClassName)}
              >
                {item.content}
              </div>
            )}
            {/* Title and description below */}
            <div>
              <h2 className="text-2xl font-bold text-slate-100">
                {item.title}
              </h2>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="h-20" />
      </div>
    </motion.div>
  );
};
