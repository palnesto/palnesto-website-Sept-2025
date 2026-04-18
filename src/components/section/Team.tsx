import { cn } from "../../lib/utils";
// // import ChromaGrid from "../ui/ChromaGrid";
// // import Particles from "../ui/Particles";
import { Spotlight } from "../ui/spotlight-new";

// // const items = [
// //   {
// //     image: "https://i.pravatar.cc/300?img=8",
// //     title: "Alex Rivera",
// //     subtitle: "Full Stack Developer",
// //     handle: "@alexrivera",
// //     borderColor: "#4F46E5",
// //     gradient: "linear-gradient(145deg,#4F46E5,#000)",
// //     url: "https://github.com/",
// //   },
// //   {
// //     image: "https://i.pravatar.cc/300?img=11",
// //     title: "Jordan Chen",
// //     subtitle: "DevOps Engineer",
// //     handle: "@jordanchen",
// //     borderColor: "#10B981",
// //     gradient: "linear-gradient(210deg,#10B981,#000)",
// //     url: "https://linkedin.com/in/",
// //   },
// //   {
// //     image: "https://i.pravatar.cc/300?img=3",
// //     title: "Morgan Blake",
// //     subtitle: "UI/UX Designer",
// //     handle: "@morganblake",
// //     borderColor: "#F59E0B",
// //     gradient: "linear-gradient(165deg,#F59E0B,#000)",
// //     url: "https://dribbble.com/",
// //   },
// //   {
// //     image: "https://i.pravatar.cc/300?img=16",
// //     title: "Casey Park",
// //     subtitle: "Data Scientist",
// //     handle: "@caseypark",
// //     borderColor: "#EF4444",
// //     gradient: "linear-gradient(195deg,#EF4444,#000)",
// //     url: "https://kaggle.com/",
// //   },
// //   {
// //     image: "https://i.pravatar.cc/300?img=25",
// //     title: "Sam Kim",
// //     subtitle: "Mobile Developer",
// //     handle: "@thesamkim",
// //     borderColor: "#8B5CF6",
// //     gradient: "linear-gradient(225deg,#8B5CF6,#000)",
// //     url: "https://github.com/",
// //   },
// //   {
// //     image: "https://i.pravatar.cc/300?img=60",
// //     title: "Tyler Rodriguez",
// //     subtitle: "Cloud Architect",
// //     handle: "@tylerrod",
// //     borderColor: "#06B6D4",
// //     gradient: "linear-gradient(135deg,#06B6D4,#000)",
// //     url: "https://aws.amazon.com/",
// //   },
// // ];

export function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 rotate-[0deg] -translate-x-[0%] translate-y-[60dvh]">
        <Spotlight />
      </div>
      <div
        className={cn("absolute h-full w-full translate-y-[50%] scale-[2]")}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen items-center justify-center">
        {children}
      </div>
    </div>
  );
}

// // const Team = () => {
// //   return (
// //     <TeamLayout>
// //       <div style={{ position: "relative" }}>
// //         <ChromaGrid
// //           items={items}
// //           radius={300}
// //           damping={0.45}
// //           fadeOut={0.6}
// //           ease="power3.out"
// //         />
// //       </div>
// //     </TeamLayout>
// //   );
// // };

// // export default Team;
// import { motion } from "framer-motion";

// export type TeamMember = {
//   id: string;
//   name: string;
//   title: string;
//   image: string;
// };

// export type HoverPillTeamProps = {
//   members: TeamMember[];
//   className?: string;
//   /** Tailwind classes that set CSS vars for base/hover width + height per breakpoint */
//   pillSizeClasses?: string;
// };

// const sampleMembers: TeamMember[] = [
// {
//   id: "1",
//   name: "Aanya Kapoor",
//   title: "Product Lead",
//   image:
//     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
// },
// {
//   id: "2",
//   name: "Emma Grace",
//   title: "Founder",
//   image: "https://i.pravatar.cc/300?img=16",
// },
// {
//   id: "3",
//   name: "Noah Carter",
//   title: "Engineering",
//   image:
//     "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop",
// },
// {
//   id: "4",
//   name: "Luca Rivera",
//   title: "Design",
//   image:
//     "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
// },
// {
//   id: "5",
//   name: "Sam Kim",
//   title: "Mobile Developer",
//   image: "https://i.pravatar.cc/300?img=60",
// },
// {
//   id: "6",
//   name: "Tyler Rodriguez",
//   title: "Cloud Architect",
//   image: "https://i.pravatar.cc/300?img=25",
// },
// {
//   id: "7",
//   name: "Casey Park",
//   title: "Data Scientist",
//   image: "https://i.pravatar.cc/300?img=3",
// },
// {
//   id: "8",
//   name: "Morgan Blake",
//   title: "UI/UX Designer",
//   image: "https://i.pravatar.cc/300?img=11",
// },
// {
//   id: "9",
//   name: "Jordan Chen",
//   title: "DevOps Engineer",
//   image: "https://i.pravatar.cc/300?img=8",
// },
// {
//   id: "10",
//   name: "Alex Rivera",
//   title: "Full Stack Developer",
//   image: "https://i.pravatar.cc/300?img=2",
// },
// ];

// function cn(...xs: Array<string | false | undefined | null>) {
//   return xs.filter(Boolean).join(" ");
// }

// function TeamPill({
//   person,
//   pillSizeClasses,
// }: {
//   person: TeamMember;
//   pillSizeClasses: string;
// }) {
//   return (
//     <motion.div
//       className={cn(
//         // sizing via CSS vars (set by pillSizeClasses)
//         pillSizeClasses,
//         // base visuals
//         "group relative overflow-hidden rounded-3xl shadow-lg xl:shadow-2xl"
//       )}
//       style={{
//         // height/width driven by CSS vars, so Tailwind breakpoints can change them
//         height: "var(--pill-h)",
//         width: "var(--pill-w)",
//       }}
//       initial={{ width: "var(--pill-w)" }}
//       animate={{ width: "var(--pill-w)" }}
//       whileHover={{ width: "var(--pill-w-hover)" }}
//       transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
//     >
//       {/* Image */}
//       <motion.img
//         src={person.image}
//         alt={person.name}
//         className="absolute inset-0 h-full w-full object-cover"
//         initial={{ scale: 1 }}
//         whileHover={{ scale: 1.06 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         loading="lazy"
//       />

//       {/* Bottom gradient + text (shows on hover) */}
//       <motion.div
//         className="pointer-events-none absolute inset-0"
//         initial={{ opacity: 0 }}
//         whileHover={{ opacity: 1 }}
//         transition={{ duration: 0.25, ease: "easeOut" }}
//       >
//         <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//         <div className="absolute bottom-2 left-3 right-3 select-none">
//           <div className="truncate text-sm font-semibold text-white drop-shadow">
//             {person.name}
//           </div>
//           <div className="truncate text-[11px] text-neutral-200/90 drop-shadow">
//             {person.title}
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function HoverPillTeam({
//   members = sampleMembers,
//   className,
//   // DEFAULTS: base width 60px → hover 180px; height 180px.
//   // Override per your breakpoints as needed.
//   pillSizeClasses = cn(
//     "[--pill-h:180px] lg:[--pill-h:280px]",
//     "[--pill-w:70px] lg:[--pill-w:90px]",
//     "[--pill-w-hover:180px] lg:[--pill-w-hover:280px]"
//   ),
// }: HoverPillTeamProps) {
//   return (
//     <TeamLayout>
//       <section
//         className={cn(
//           "mx-auto w-full max-w-6xl px-4 py-10 grid auto-cols-max grid-flow-col gap-6 place-items-center",
//           className
//         )}
//       >
//         {members.map((m) => (
//           <TeamPill key={m.id} person={m} pillSizeClasses={pillSizeClasses} />
//         ))}
//       </section>
//     </TeamLayout>
//   );
// }

import { motion } from "framer-motion";

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
};
export type HoverPillTeamProps = {
  members: TeamMember[];
  className?: string;
  pillSizeClasses?: string; // CSS vars via Tailwind
};

const sampleMembers: TeamMember[] = [
  {
    id: "1",
    name: "Aanya Kapoor",
    title: "Product Lead",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Emma Grace",
    title: "Founder",
    image: "https://i.pravatar.cc/300?img=16",
  },
  {
    id: "3",
    name: "Noah Carter",
    title: "Engineering",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Luca Rivera",
    title: "Design",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Sam Kim",
    title: "Mobile Developer",
    image: "https://i.pravatar.cc/300?img=60",
  },
  {
    id: "6",
    name: "Tyler Rodriguez",
    title: "Cloud Architect",
    image: "https://i.pravatar.cc/300?img=25",
  },
  {
    id: "7",
    name: "Casey Park",
    title: "Data Scientist",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    id: "8",
    name: "Morgan Blake",
    title: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: "9",
    name: "Jordan Chen",
    title: "DevOps Engineer",
    image: "https://i.pravatar.cc/300?img=8",
  },
  {
    id: "10",
    name: "Alex Rivera",
    title: "Full Stack Developer",
    image: "https://i.pravatar.cc/300?img=2",
  },
];

function TeamPill({
  person,
  pillSizeClasses,
}: {
  person: TeamMember;
  pillSizeClasses: string;
}) {
  return (
    <motion.div
      className={cn(
        pillSizeClasses,
        "group relative overflow-hidden rounded-3xl shadow-lg xl:shadow-2xl ring-1 ring-slate-600 ring-offset-4 ring-offset-stone-950"
      )}
      style={{ height: "var(--pill-h)", width: "var(--pill-w)" }}
      initial={{ width: "var(--pill-w)" }}
      animate={{ width: "var(--pill-w)" }}
      whileHover={{ width: "var(--pill-w-hover)" }} // ✅ same spring width animation
      transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
    >
      {/* Image */}
      <img
        src={person.image}
        alt={person.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        loading="lazy"
      />

      {/* Overlay + text — now tied to parent's hover via group-hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute bottom-2 left-3 right-3 select-none">
          <div className="truncate text-sm md:text-lg 2xl:text-2xl font-bold text-white drop-shadow">
            {person.name}
          </div>
          <div className="truncate text-[11px] md:text-sm 2xl:text-lg  text-neutral-200/90 drop-shadow">
            {person.title}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HoverPillTeam({
  members = sampleMembers,
  className,
  pillSizeClasses = cn(
    "[--pill-h:180px] lg:[--pill-h:280px]",
    "[--pill-w:70px]  lg:[--pill-w:90px]",
    "[--pill-w-hover:180px] lg:[--pill-w-hover:280px]"
  ),
}: HoverPillTeamProps) {
  return (
    <TeamLayout>
      <h1 className="text-center text-6xl font-bold text-white font-serif">
        Meet the Team
      </h1>
      <section
        className={cn(
          // ✅ centers the whole row
          "mx-auto w-full max-w-6xl px-4 py-10",
          "grid grid-flow-col auto-cols-max gap-10 justify-center place-items-center",
          className
        )}
      >
        {members.map((m) => (
          <TeamPill key={m.id} person={m} pillSizeClasses={pillSizeClasses} />
        ))}
      </section>
    </TeamLayout>
  );
}
