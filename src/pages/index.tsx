// const NigeVerse = lazy(() => import("../components/sections/nige-verse"));
// import loader from "../components/assets/loader.mp4";
// import v from "../components/assets/v.mp4";
// import main from "../components/assets/main.mp4";
// export default function FullScreenVideo() {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Background video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={loader} type="video/mp4" />

//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

// export default function FullScreenVideo() {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Background video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={v} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

// export default function FullScreenVideo() {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Background video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={main} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import MagicBento from "../components/common/MagicBento";
import { motion, useScroll, AnimatePresence } from "motion/react";
import loader from "../components/assets/loader.mp4";
import main from "../components/assets/main.mp4";
import AutoScrollVideo from "../components/section/AutoScrollVideo";
import Solving from "../components/section/Solving";
import { StickyScrollRevealDemo } from "../components/section/StickyScroll";
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
        <>
          <motion.div
            id="scroll-indicator"
            style={{
              scaleX: scrollYProgress,
              position: "fixed",
              zIndex: 100,
              top: 0,
              left: 0,
              right: 0,
              height: 10,
              originX: 0,
              backgroundColor: "#FFC100",
            }}
          />
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
          <section id="after-main" className="min-h-screen bg-white">
            <Solving />
          </section>
          <section
            id="sticky-reveal"
            className="min-h-screen w-screen bg-black"
          >
            <StickyScrollRevealDemo />
          </section>
          <section className="">
            <InfiniteMenu items={items} />
          </section>
          ;
        </>
      )}
    </>
  );
};

export default Main;
