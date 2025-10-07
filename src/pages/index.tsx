import { useState, useEffect } from "react";
import MagicBento from "../components/common/MagicBento";
import { motion, useScroll, AnimatePresence } from "motion/react";
import loader from "../components/assets/loader.mp4";
import main from "../components/assets/main.mp4";
import AutoScrollVideo from "../components/section/AutoScrollVideo";
import Solving from "../components/section/Solving";
import { StickyScrollRevealDemo } from "../components/section/StickyScroll";
import Footer from "../components/section/Footer";

import InfiniteMenu from "../components/common/InfiniteMenu";
import { items } from "../components/types";

const Main = () => {
  const { scrollYProgress } = useScroll();

  const [showVideo, setShowVideo] = useState(true);
  const [shrinkVideo, setShrinkVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrinkVideo(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showVideo && (
          <motion.div
            key="video-container"
            initial={{ height: "100%", width: "100%", scale: 1 }}
            animate={{
              height: shrinkVideo ? "56px" : "100%",
              scale: shrinkVideo ? 1 : 1,
              backgroundColor: shrinkVideo ? "transparent" : "",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              zIndex: 9999,
              originX: 0.5,
              originY: 0.5,
              overflow: "hidden",
            }}
            onAnimationComplete={() => {
              if (shrinkVideo) setShowVideo(false);
            }}
          >
            <video
              src={loader}
              playsInline
              autoPlay
              muted
              loop={false}
              style={{
                height: "100%",
                width: "100%",
                objectFit: shrinkVideo ? "contain" : "cover",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showVideo && (
        <main className="relative min-h-screen font-mono">
          <nav
            className="flex items-center justify-between p-4 md:p-7 text-2xl font-extrabold lg:hidden"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 56,
              backgroundColor: "white",
              zIndex: 1000,
            }}
          >
            <header className="leading-5">
              Pal <br /> Nesto
            </header>
            <a href="/portfolio">Our Works</a>
          </nav>
          <motion.div
            id="scroll-indicator"
            className="top-14 lg:top-0"
            style={{
              scaleX: scrollYProgress,
              position: "fixed",
              zIndex: 999,
              left: 0,
              right: 0,
              height: 10,
              originX: 0,
              backgroundColor: "#FFC100",
            }}
          />
          <main className="min-h-screen overflow-hidden font-mono pt-[40px] lg:pt-0">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
            <AutoScrollVideo
              src={main}
              targetId="after-main"
              offset={0}
              loop={false}
            />
            <section id="after-main" className="relative bg-white">
              <Solving />
            </section>
            <section
              id="sticky-reveal"
              className="min-h-screen w-screen bg-black"
            >
              <StickyScrollRevealDemo />
            </section>
            <section className="h-[100vh] bg-black">
              {/* <div
                style={{ width: "100%", height: "600px", position: "absolute" }}
              >
                <Galaxy />
              </div>
              <div
                style={{ width: "100%", height: "600px", position: "absolute" }}
              >
                <Galaxy
                  mouseRepulsion={true}
                  mouseInteraction={true}
                  density={1.5}
                  glowIntensity={0.5}
                  saturation={0.8}
                  hueShift={240}
                />
              </div> */}
              <InfiniteMenu items={items} />
            </section>
            <Footer />
          </main>
        </main>
      )}
    </>
  );
};

export default Main;
