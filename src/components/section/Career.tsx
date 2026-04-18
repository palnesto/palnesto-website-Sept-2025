// import { motion, useReducedMotion } from "framer-motion";
// import ScrollFloat from "../common/ScrollFloat";
// // 👉 Install: npm i framer-motion react-bits
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore - types may not be bundled with react-bits yet

// /**
//  * CareerSection
//  * ------------------------------------------------------------
//  * 5-column mosaic for "Current Openings" with exact layout:
//  * - Column 1: 2 cards (TOP taller, BOTTOM shorter)
//  * - Column 2: 1 mid-height card
//  * - Column 3: 1 small card (smaller than col-2 & col-4)
//  * - Column 4: 1 mid-height card
//  * - Column 5: 2 cards (TOP taller, BOTTOM shorter)
//  *
//  * Card content comes from a CONFIG you can pass as props.
//  * Each card displays a background image and the post title.
//  *
//  * Usage:
//  * <CareerSection config={myConfig} />
//  */

// // ---------- Types ----------
// export type OpeningCardData = {
//   title: string;
//   image: string; // background image URL
//   href?: string; // optional link to JD / apply
// };

// export type CareerConfig = {
//   columns: {
//     col1: [OpeningCardData, OpeningCardData];
//     col2: [OpeningCardData];
//     col3: [OpeningCardData];
//     col4: [OpeningCardData];
//     col5: [OpeningCardData, OpeningCardData];
//   };
// };

// // ---------- Default Config (replace with your data) ----------
// const DEFAULT_CONFIG: CareerConfig = {
//   columns: {
//     col1: [
//       {
//         title: "Senior Frontend Engineer",
//         image:
//           "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
//         href: "#apply-frontend",
//       },
//       {
//         title: "Design Systems Engineer",
//         image:
//           "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop",
//         href: "#apply-dse",
//       },
//     ],
//     col2: [
//       {
//         title: "Product Designer",
//         image:
//           "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop",
//         href: "#apply-pd",
//       },
//     ],
//     col3: [
//       {
//         title: "Community Manager",
//         image:
//           "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
//         href: "#apply-cm",
//       },
//     ],
//     col4: [
//       {
//         title: "Backend Engineer (Node)",
//         image:
//           "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
//         href: "#apply-be",
//       },
//     ],
//     col5: [
//       {
//         title: "Data Scientist (AI)",
//         image:
//           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
//         href: "#apply-ds",
//       },
//       {
//         title: "People Ops Lead",
//         image:
//           "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop",
//         href: "#apply-people",
//       },
//     ],
//   },
// };

// // ---------- Animations ----------
// const container = {
//   hidden: { opacity: 0 },
//   show: (stagger = 0.06) => ({
//     opacity: 1,
//     transition: { staggerChildren: stagger },
//   }),
// };

// const item = {
//   hidden: { opacity: 0, y: 18 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 140, damping: 18 },
//   },
// };

// // ---------- Helpers ----------
// function cx(...classes: (string | undefined | false)[]) {
//   return classes.filter(Boolean).join(" ");
// }

// function CardBase({
//   data,
//   height,
//   priority,
// }: {
//   data: OpeningCardData;
//   height: "tall" | "mid" | "small" | "short";
//   priority?: boolean;
// }) {
//   const size =
//     height === "tall"
//       ? "h-80 md:h-[270px]"
//       : height === "mid"
//       ? "h-64 md:h-[300px]"
//       : height === "small"
//       ? "h-56 md:h-[220px]"
//       : "h-48 md:h-[150px]"; // short

//   const Img = (
//     <img
//       src={data.image}
//       alt={data.title}
//       loading={priority ? "eager" : "lazy"}
//       className="absolute inset-0 h-full w-full object-cover"
//     />
//   );

//   const Content = (
//     <>
//       {/* Gradient overlay at bottom */}
//       <div
//         className="
//           pointer-events-none absolute inset-x-0 bottom-0
//           h-24 md:h-32
//           bg-gradient-to-t from-black via-black/50 to-transparent
//           transition-[background] duration-300
//           group-hover:from-black/85 group-hover:via-black/45
//         "
//       />
//       {/* Title */}
//       <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
//         <h3 className="text-white text-sm md:text-base font-semibold leading-tight drop-shadow-sm">
//           {data.title}
//         </h3>
//       </div>
//     </>
//   );

//   const Card = (
//     <motion.div
//       variants={item}
//       whileHover={{ y: -4 }}
//       transition={{ type: "spring", stiffness: 240, damping: 20 }}
//       className={cx(
//         "relative overflow-hidden rounded-3xl",
//         "ring-1 ring-black/5 dark:ring-white/10",
//         "shadow-sm",
//         size
//       )}
//     >
//       <div className="absolute inset-0" />
//       {Img}
//       {Content}
//     </motion.div>
//   );

//   if (data.href) {
//     return (
//       <a
//         href={data.href}
//         className="block focus:outline-none focus:ring-2 focus:ring-emerald-400/60 rounded-2xl"
//       >
//         {Card}
//       </a>
//     );
//   }
//   return Card;
// }

// // ---------- Component ----------
// export default function CareerSection({
//   config = DEFAULT_CONFIG,
// }: {
//   config?: CareerConfig;
// }) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section className="relative w-full bg-neutral-50 dark:bg-neutral-900">
//       <div className="mx-auto max-w-7xl px-6 py-16 md:py-16">
//         {/* Header with ScrollFloat */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.6 }}
//           variants={container}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <motion.h1
//             variants={item}
//             className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 md:text-9xl"
//           >
//             <ScrollFloat strength={18} className="inline-block">
//               Current Openings
//             </ScrollFloat>
//           </motion.h1>
//           <motion.p
//             variants={item}
//             className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
//           >
//             Join a mission-driven team. Learn fast, ship impact, grow your
//             career.
//           </motion.p>
//           {/* <button className="relative text-neutral-500 px-12 py-2 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(rgba(255,255,255,0.1))_inset]">
//             Glow
//           </button> */}
//         </motion.div>

//         {/* 5-Column Mosaic */}
//         <motion.div
//           className="grid grid-cols-1 gap-4 md:grid-cols-5 items-end"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={container}
//         >
//           {/* Column 1: tall + short */}
//           <div className="flex flex-col gap-4">
//             <CardBase data={config.columns.col1[0]} height="tall" priority />
//             <CardBase data={config.columns.col1[1]} height="short" />
//           </div>

//           {/* Column 2: mid */}
//           <div className="flex flex-col gap-4">
//             <CardBase data={config.columns.col2[0]} height="mid" />
//           </div>

//           {/* Column 3 (center): small (smaller than col2 & col4) */}
//           <div className="flex flex-col gap-4">
//             <CardBase data={config.columns.col3[0]} height="small" />
//           </div>

//           {/* Column 4: mid */}
//           <div className="flex flex-col gap-4">
//             <CardBase data={config.columns.col4[0]} height="mid" />
//           </div>

//           {/* Column 5: tall + short */}
//           <div className="flex flex-col gap-4">
//             <CardBase data={config.columns.col5[0]} height="tall" />
//             <CardBase data={config.columns.col5[1]} height="short" />
//           </div>
//         </motion.div>

//         {/* Subtle footer line */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 6 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto mt-12 max-w-2xl text-center text-sm text-neutral-500 dark:text-neutral-400"
//         >
//           Don’t see a perfect fit? Send your resume to careers@example.com
//         </motion.div> */}
//       </div>

//       {/* Background accent */}
//       {!reduceMotion && (
//         <motion.div
//           aria-hidden
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.1 }}
//           className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-emerald-600/10 to-transparent"
//         />
//       )}
//     </section>
//   );
// }
import { motion, useReducedMotion } from "framer-motion";
import ScrollFloat from "../common/ScrollFloat";
import { useNavigate } from "react-router-dom"; // works with Vite page routing
import { openings } from "../../lib/openings";

export type OpeningCardData = {
  title: string;
  image: string;
  href?: string;
};

const container = {
  hidden: { opacity: 0 },
  show: (stagger = 0.06) => ({
    opacity: 1,
    transition: { staggerChildren: stagger },
  }),
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

function cx(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function CardBase({
  data,
  height,
  priority,
}: {
  data: OpeningCardData;
  height: "tall" | "mid" | "small" | "short";
  priority?: boolean;
}) {
  const navigate = useNavigate();

  const size =
    height === "tall"
      ? "h-80 md:h-[270px]"
      : height === "mid"
      ? "h-64 md:h-[300px]"
      : height === "small"
      ? "h-56 md:h-[220px]"
      : "h-48 md:h-[150px]";

  const handleClick = () => {
    const slug =
      data.href?.replace(/^#/, "") ||
      data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    navigate(`/career/${slug}`);
  };

  return (
    <motion.div
      id="career"
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      onClick={handleClick}
      className={cx(
        "relative overflow-hidden rounded-3xl cursor-pointer group",
        "ring-1 ring-black/5 dark:ring-white/10",
        "shadow-sm select-none",
        size
      )}
    >
      <img
        src={data.image}
        alt={data.title}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          h-24 md:h-32
          bg-gradient-to-t from-black via-black/50 to-transparent
          transition-[background] duration-300
          group-hover:from-black/85 group-hover:via-black/45
        "
      />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <h3 className="text-white text-sm md:text-base font-semibold leading-tight drop-shadow-sm">
          {data.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function CareerSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={container}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            variants={item}
            className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 md:text-9xl"
          >
            <ScrollFloat strength={18} className="inline-block">
              Current Openings
            </ScrollFloat>
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
          >
            Join a mission-driven team. Learn fast, ship impact, grow your
            career.
          </motion.p>
        </motion.div>

        {/* Grid layout */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-5 items-end"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <div className="flex flex-col gap-4">
            <CardBase data={openings[0]} height="tall" />
            <CardBase data={openings[1]} height="short" />
          </div>

          <div className="flex flex-col gap-4">
            <CardBase data={openings[2]} height="mid" />
          </div>

          <div className="flex flex-col gap-4">
            <CardBase data={openings[3]} height="small" />
          </div>

          <div className="flex flex-col gap-4">
            <CardBase data={openings[4]} height="mid" />
          </div>

          <div className="flex flex-col gap-4">
            <CardBase data={openings[5]} height="tall" />
            <CardBase data={openings[6]} height="short" />
          </div>
        </motion.div>
      </div>

      {/* {!reduceMotion && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-emerald-600/10 to-transparent"
        />
      )} */}
    </section>
  );
}
