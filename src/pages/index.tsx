import { useState, useEffect } from "react";
import MagicBento from "../components/common/MagicBento";
import { motion, useScroll, AnimatePresence } from "motion/react";
import loader from "../components/assets/loader.mp4";
import main from "../components/assets/main.mp4";
import AutoScrollVideo from "../components/section/AutoScrollVideo";
import Solving from "../components/section/Solving";
import InfiniteMenu from "../components/common/InfiniteMenu";
import p1 from "../components/assets/ngcover.png";
import p2 from "../components/assets/nigecoincover.jpg";
import p3 from "../components/assets/CA-cover.jpg";
import p4 from "../components/assets/GGpcover.jpg";
import p5 from "../components/assets/DSGlobal.gif";
import p6 from "../components/assets/fabreco.gif";
import p9 from "../components/assets/lemme.jpg";
import p10 from "../components/assets/A4.png";
import p11 from "../components/assets/birdsongpro.jpg";
import p12 from "../components/assets/saitachain.png";
import p13 from "../components/assets/smart.png";
import { StickyScrollRevealDemo } from "../components/section/StickyScroll";
import Footer from "../components/section/Footer";
import LightRays from "../components/common/LightRays";

const items = [
  {
    image: p1,
    link: "/portfolio/nige-global",
    title: "Nige Global",
    description: "",
  },
  {
    image: p2,
    link: "/portfolio/nigecoin",
    title: "Nigecoin",
    description: "",
  },
  {
    image: p3,
    link: "/portfolio/commander-ape",
    title: "Commander Ape",
    description: "",
  },
  {
    image: p4,
    link: "/portfolio/grumpy-grandpa",
    title: "Grumpy Grandpa",
    description: "",
  },
  {
    image: p5,
    link: "/portfolio/ds-global-solution",
    title: "D&S Global Solution",
    description: "",
  },
  {
    image: p6,
    link: "/portfolio/fabreco",
    title: "Fabreco",
    description: " ",
  },

  {
    image: p9,
    link: "/portfolio/lemme-be",
    title: "Lemme",
    description: "",
  },
  {
    image: p10,
    link: "/portfolio/a4",
    title: "A4",
    description: "",
  },
  {
    image: p11,
    link: "/portfolio/bird-song",
    title: "Bird Song",
    description: "",
  },
  {
    image: p12,
    link: "/portfolio/saita-card",
    title: "Saita Card",
    description: "",
  },
  {
    image: p13,
    link: "https://google.com/",
    title: "Item 13",
    description: "This is pretty cool, right?",
  },
];

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
          {/* Sticky nav */}

          <nav
            className="flex items-center justify-between p-4 md:p-7 text-2xl font-extrabold lg:hidden"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 56, // or your nav height
              backgroundColor: "white", // or desired nav bg color
              zIndex: 1000,
            }}
          >
            <header className="leading-5">
              Pal <br /> Nesto
            </header>
            <header>Works</header>
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
            <section className="h-screen">
              <div
                style={{ width: "100%", height: "600px", position: "absolute" }}
              >
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#00ffff"
                  raysSpeed={1.5}
                  lightSpread={0.8}
                  rayLength={1.2}
                  followMouse={true}
                  mouseInfluence={0.1}
                  noiseAmount={0.1}
                  distortion={0.05}
                  className="custom-rays"
                />
              </div>
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
