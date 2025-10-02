import { StickyScroll } from "../ui/sticky-scroll-reveal";
import dist from "../assets/distribute.mp4";
import dev from "../assets/develop.mp4";
import design from "../assets/design.mp4";
const content = [
  {
    title: "Design That Speaks",
    description:
      "From UI/UX to product ideation, we create intuitive experiences and test them in the market to ensure they connect with your audience.",
    content: (
      // <CompareDemo />,
      <>
        <div className="h-96">
          <video
            key={"0"}
            className="h-full w-full object-cover"
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
          >
            <source src={design} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    ),
  },
  {
    title: "Develop Without Limits",
    description:
      "Wireframes to full-stack — backend, frontend, and scalable flows. We build resilient, high-performing products ready for the onchain world",
    content: (
      <>
        <div className="h-96">
          <video
            key={"1"}
            className="h-full w-full object-fill"
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
          >
            <source src={dev} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    ),
  },
  {
    title: "Distribute Smarter",
    description:
      "From A/B testing to PR, social media, and live events — we accelerate adoption with strategies that reach the right users at the right time.",
    content: (
      <>
        <div className="h-96 ">
          <video
            key={"2"}
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
        </div>
      </>
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
