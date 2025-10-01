import { CompareDemo } from "../common/Compare";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import dist from "../assets/distribute.mp4";
import dev from "../assets/develop.mp4";
const content = [
  {
    title: "Design That Speaks",
    description:
      "From UI/UX to product ideation, we create intuitive experiences and test them in the market to ensure they connect with your audience.",
    content: <CompareDemo />,
  },
  {
    title: "Develop Without Limits",
    description:
      "Wireframes to full-stack — backend, frontend, and scalable flows. We build resilient, high-performing products ready for the onchain world",
    content: (
      <video
        className="h-full w-full object-cover"
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
      >
        <source src={dev} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    title: "Distribute Smarter",
    description:
      "From A/B testing to PR, social media, and live events — we accelerate adoption with strategies that reach the right users at the right time.",
    content: (
      <video
        className="h-full w-full object-cover"
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
      >
        <source src={dist} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="flex h-full w-full items-center justify-center  text-white">
        From A/B testing to PR, social media, and live events — we accelerate
        adoption with strategies that reach the right users at the right time.
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full pt-4">
      <StickyScroll content={content} />
    </div>
  );
}
