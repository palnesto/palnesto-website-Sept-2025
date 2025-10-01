import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // ensure "framer-motion"
import type { NextSectionProps } from "../types";
import arrow from "../assets/arrow.png";
import smiley from "../assets/smiley.png";

const TICKER_TEXT =
  "Future-Ready Solutions • Product Design • Web3 • AI • Strategy • Engineering • ";

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const Solving: React.FC<NextSectionProps> = ({ id = "after-main" }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1 for spacing
  const [showPills, setShowPills] = useState(false); // pills/icons stage
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let ticking = false;
    const compute = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.8;
      const end = vh * 0.4;

      const raw = (start - rect.top) / (start - end);
      const p = clamp01(raw);
      setProgress(p);

      // When spacing fully open → wait 2s → show pills/icons
      if (p >= 1) {
        if (!showPills && !timerRef.current) {
          timerRef.current = window.setTimeout(() => {
            setShowPills(true);
            timerRef.current = null;
          }, 500);
        }
      } else {
        setShowPills(false);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          compute();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    compute();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [showPills]);

  // Convert progress to pixels (max spacing)
  const gapPx = Math.round(progress * 40);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 2;
      setIsSticky(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id={id} ref={sectionRef} className="min-h-screen font-mono">
      <nav
        className={`${
          isSticky ? "fixed top-0 left-0 right-0" : ""
        } z-50 bg-white lg:flex items-center justify-between p-4 md:p-7 text-2xl font-extrabold hidden`}
      >
        <header className="leading-5">
          Pal <br /> Nesto
        </header>
        <header>Works</header>
      </nav>
      <div className="flex justify-center pt-32 text-2xl leading-3 font-bold">
        <div
          style={{ rowGap: gapPx }}
          className="flex flex-col items-center transition-[row-gap] duration-150"
        >
          <div className="relative inline-block">
            <h1 className="text-[clamp(28px,4.2vw,48px)]">Solving Your</h1>
            <motion.img
              src={arrow}
              width="28"
              height="28"
              animate={showPills ? { y: [0, -16, 0], x: [10, 0, 10] } : {}}
              transition={
                showPills
                  ? { duration: 6.6, repeat: Infinity, ease: "easeInOut" }
                  : {}
              }
              className="absolute -bottom-4 -right-6 pointer-events-none"
            />
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              showPills
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ x: "-120%" }}
              animate={showPills ? { x: 0 } : { x: "-120%" }}
              transition={{ type: "spring", stiffness: 250, damping: 24 }}
              className="px-6 py-4 rounded-full bg-black text-white border border-black inline-block"
            >
              Onchain
            </motion.div>
          </motion.div>

          <h1 className="text-start text-[clamp(28px,4.2vw,48px)]">Business</h1>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              showPills
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.4 }}
            className="overflow-visible"
          >
            <div className="relative inline-block">
              {/* Smiley: continuous floating */}
              <motion.img
                src={smiley}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-14 -top-2 pointer-events-none h-20"
              />
              <motion.div
                initial={{ x: "120%" }}
                animate={showPills ? { x: 0 } : { x: "120%" }}
                transition={{ type: "spring", stiffness: 250, damping: 24 }}
                className="px-8 py-4 rounded-full bg-[#FE5A00] text-white border border-black"
              >
                with Visionary
              </motion.div>
            </div>
          </motion.div>

          <h1 className="text-[clamp(28px,4.2vw,48px)]">Success</h1>
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute left-0 right-0 bottom-[-5px] h-[70px] overflow-hidden origin-bottom-right"
        animate={showPills ? { skewY: 0 } : { skewY: -6 }}
        transition={{ duration: 3.4 }}
      >
        <div className="relative h-full bg-[#FFC100]">
          <div className="absolute inset-x-0 h-[64px] overflow-hidden">
            <div className="whitespace-nowrap [animation:marquee_5s_linear_infinite] will-change-transform font-semibold tracking-wider uppercase text-black text-[18px] leading-[64px]">
              {TICKER_TEXT.repeat(6)}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Solving;
