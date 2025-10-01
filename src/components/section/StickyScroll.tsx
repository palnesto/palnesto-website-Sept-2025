import { CompareDemo } from "../common/Compare";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

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
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Distribute Smarter",
    description:
      "From A/B testing to PR, social media, and live events — we accelerate adoption with strategies that reach the right users at the right time.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full pb-4">
      <StickyScroll content={content} />
    </div>
  );
}
