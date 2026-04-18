import { useState, useEffect } from "react";
import MagicBento from "../components/common/MagicBento";
import { motion, useScroll, AnimatePresence } from "motion/react";
import loader from "../components/assets/loader.mp4";
import main from "../components/assets/main.mp4";
import AutoScrollVideo from "../components/section/AutoScrollVideo";
import Solving from "../components/section/Solving";
import { StickyScrollRevealDemo } from "../components/section/StickyScroll";
import wp from "../components/assets/whatsapp.png";
import InfiniteMenu from "../components/common/InfiniteMenu";
import { items } from "../components/types";
import CareerSection from "../components/section/Career";
import Footer from "../components/common/Footer";
import { GoogleGeminiEffectDemo } from "../components/section/GeminiEffect";
import Team from "../components/section/Team";

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
        <main className="relative min-h-screen">
          <nav
            className="flex items-center justify-between p-4 md:p-7 md:text-2xl font-bold lg:hidden"
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
            <header className="space-x-4">
              <a
                href="http://beglitched.club/"
                target="_blank"
                rel="noreferrer"
              >
                Glitch by Palnesto
              </a>
              <a href="/portfolio">Our Works</a>
            </header>
          </nav>
          <motion.div
            id="scroll-indicator"
            className="top-14 lg:top-0 font-mono"
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
          <main className="min-h-screen font-mono pt-[40px] lg:pt-0">
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
            {/* <Team />
            <CareerSection /> */}
            <GoogleGeminiEffectDemo />
            <Footer />
            {/* whatapp icon for help desk */}
            <section className="fixed bottom-0 right-0 z-50 flex items-center justify-center w-28 h-28">
              <a
                href="https://wa.me/918886911466"
                target="_blank"
                rel="noreferrer"
              >
                <img src={wp} alt="whatsapp" />
              </a>
            </section>
          </main>
        </main>
      )}
    </>
  );
};

export default Main;
