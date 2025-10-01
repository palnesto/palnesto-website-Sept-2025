import { Compare } from "../ui/compare";

export function CompareDemo() {
  return (
    <div className="flex h-[40vh] w-3/4 items-center justify-center px-1 [perspective:800px] [transform-style:preserve-3d] md:px-8">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="mx-auto w-96 rounded-3xl p-1 md:h-full md:p-4 border-neutral-800 bg-neutral-900"
      >
        <Compare
          firstImage="https://assets.aceternity.com/notes-dark.png"
          secondImage="https://assets.aceternity.com/linear-dark.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="h-full w-full rounded-[22px] md:rounded-lg"
          slideMode="drag"
          autoplay={false}
        />
      </div>
    </div>
  );
}
