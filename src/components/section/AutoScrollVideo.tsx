// src/components/common/AutoScrollVideo.tsx
import React, { useEffect, useRef } from "react";

type AutoScrollVideoProps = {
  src: string;
  targetId: string; // id of the section to scroll to
  offset?: number; // top offset (sticky header etc.)
  className?: string; // container classes
  videoClassName?: string; // video classes
  type?: string; // "video/mp4" etc.
  threshold?: number; // Intersection threshold (0..1)
};

const AutoScrollVideo: React.FC<AutoScrollVideoProps> = ({
  src,
  targetId,
  offset = 0,
  className = "relative w-screen h-screen overflow-hidden",
  videoClassName = "absolute inset-0 w-full h-full object-cover",
  type = "video/mp4",
  threshold = 0.6,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Scroll to target when the video finishes each time
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      const top =
        (target?.getBoundingClientRect().top ?? 0) + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const onEnded = () => scrollToTarget();
    v.addEventListener("ended", onEnded);

    // Replay on re-entering the viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // restart and play
          try {
            v.currentTime = 0;
            // must be muted to autoplay
            v.muted = true;
            v.play().catch(() => {});
          } catch {}
        } else {
          v.pause();
        }
      },
      { threshold }
    );

    io.observe(v);

    return () => {
      v.removeEventListener("ended", onEnded);
      io.disconnect();
    };
  }, [targetId, offset, threshold]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop={false} // ended must fire
        className={videoClassName}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoScrollVideo;
