"use client";
import React from "react";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import { cn } from "../../lib/utils";

type MediaType = "image" | "video" | "gif";

export const EvervaultCard = ({
  title,
  src,
  mediaType = "image",
  className,
  onClick,
}: {
  title: string;
  src: string;
  mediaType?: MediaType;
  className?: string;
  onClick?: () => void;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent flex items-center justify-center w-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        onClick={onClick}
        className="group/card rounded-3xl w-full h-72 md:h-80 relative overflow-hidden bg-black flex items-center justify-center cursor-pointer"
      >
        <div className="hidden xl:block">
          <CardReveal mouseX={mouseX} mouseY={mouseY}>
            {mediaType === "video" ? (
              <video
                src={src}
                className="object-cover w-full h-full"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={src}
                alt={title}
                className="object-cover w-full h-full"
              />
            )}
          </CardReveal>
        </div>
        <div className="block xl:hidden absolute inset-0">
          {mediaType === "video" ? (
            <video
              src={src}
              className="object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img src={src} alt={title} className="object-cover w-full h-full" />
          )}
        </div>
        {/* Center title bubble (kept from original UI) */}
        <section className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center">
            <div className="absolute w-full h-full bg-white/5  blur-sm rounded-full" />
            <span className="text-white z-20 font-bold text-xl">{title}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

function CardReveal({
  mouseX,
  mouseY,
  children,
}: React.PropsWithChildren<{ mouseX: any; mouseY: any }>) {
  // spotlight mask follows the cursor
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* subtle top fade like the original */}
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50" />
      {/* reveals your media only where the mask is */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition duration-500"
        style={style}
      >
        {children}
      </motion.div>
    </div>
  );
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
