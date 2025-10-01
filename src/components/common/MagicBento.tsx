// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { gsap } from "gsap";
// import { BentoCardProps, BentoProps } from "../types";
// import logoUrl from "../assets/Logo.svg";
// import aiUxVideo from "../assets/ai.mp4"; // <-- change path if needed
// const DEFAULT_PARTICLE_COUNT = 12;
// const DEFAULT_SPOTLIGHT_RADIUS = 300;
// const DEFAULT_GLOW_COLOR = "132, 0, 255";
// const MOBILE_BREAKPOINT = 768;

// const cardData: BentoCardProps[] = [
//   {
//     color: "#FFFFFF",
//     title: "",
//     description: "",
//     label: "",
//   },
//   {
//     color: "#FFFFFF",
//     title: "Dashboard",
//     description: "Centralized data view",
//     label: "Overview",
//   },
//   {
//     color: "#FFFFFF",
//     title: "Decentralized UX/UI Design",
//     description:
//       "Power your apps with blockchain tech—secure transparent, unstoppable.",
//     label:
//       "Power your apps with blockchain tech—secure transparent, unstoppable.",
//   },
//   {
//     color: "#FFFFFF",
//     title: "Mobile  First App Experiences",
//     description: "",
//     label: "Efficiency",
//   },
//   {
//     color: "#FFFFFF",
//     title: "",
//     description: "",
//     label: "logo",
//   },
//   {
//     color: "#FFFFFF",
//     title: "AI-Enhanced Smart Contracts",
//     description: "",
//     label: "Connectivity",
//   },
//   {
//     color: "#FFFFFF",
//     title: "Blockchain EdTech Solutions",
//     description: "",
//     label: "Protection",
//   },
// ];

// const createParticleElement = (
//   x: number,
//   y: number,
//   color: string = DEFAULT_GLOW_COLOR
// ): HTMLDivElement => {
//   const el = document.createElement("div");
//   el.className = "particle";
//   el.style.cssText = `
//     position: absolute;
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background: rgba(${color}, 1);
//     box-shadow: 0 0 6px rgba(${color}, 0.6);
//     pointer-events: none;
//     z-index: 100;
//     left: ${x}px;
//     top: ${y}px;
//   `;
//   return el;
// };

// const calculateSpotlightValues = (radius: number) => ({
//   proximity: radius * 0.5,
//   fadeDistance: radius * 0.75,
// });

// const updateCardGlowProperties = (
//   card: HTMLElement,
//   mouseX: number,
//   mouseY: number,
//   glow: number,
//   radius: number
// ) => {
//   const rect = card.getBoundingClientRect();
//   const relativeX = ((mouseX - rect.left) / rect.width) * 100;
//   const relativeY = ((mouseY - rect.top) / rect.height) * 100;

//   card.style.setProperty("--glow-x", `${relativeX}%`);
//   card.style.setProperty("--glow-y", `${relativeY}%`);
//   card.style.setProperty("--glow-intensity", glow.toString());
//   card.style.setProperty("--glow-radius", `${radius}px`);
// };

// const ParticleCard: React.FC<{
//   children: React.ReactNode;
//   className?: string;
//   disableAnimations?: boolean;
//   style?: React.CSSProperties;
//   particleCount?: number;
//   glowColor?: string;
//   enableTilt?: boolean;
//   clickEffect?: boolean;
//   enableMagnetism?: boolean;
// }> = ({
//   children,
//   className = "",
//   disableAnimations = false,
//   style,
//   particleCount = DEFAULT_PARTICLE_COUNT,
//   glowColor = DEFAULT_GLOW_COLOR,
//   enableTilt = true,
//   clickEffect = false,
//   enableMagnetism = false,
// }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const particlesRef = useRef<HTMLDivElement[]>([]);
//   const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
//   const isHoveredRef = useRef(false);
//   const memoizedParticles = useRef<HTMLDivElement[]>([]);
//   const particlesInitialized = useRef(false);
//   const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

//   const initializeParticles = useCallback(() => {
//     if (particlesInitialized.current || !cardRef.current) return;

//     const { width, height } = cardRef.current.getBoundingClientRect();
//     memoizedParticles.current = Array.from({ length: particleCount }, () =>
//       createParticleElement(
//         Math.random() * width,
//         Math.random() * height,
//         glowColor
//       )
//     );
//     particlesInitialized.current = true;
//   }, [particleCount, glowColor]);

//   const clearAllParticles = useCallback(() => {
//     timeoutsRef.current.forEach(clearTimeout);
//     timeoutsRef.current = [];
//     magnetismAnimationRef.current?.kill();

//     particlesRef.current.forEach((particle) => {
//       gsap.to(particle, {
//         scale: 0,
//         opacity: 0,
//         duration: 0.3,
//         ease: "back.in(1.7)",
//         onComplete: () => {
//           particle.parentNode?.removeChild(particle);
//         },
//       });
//     });
//     particlesRef.current = [];
//   }, []);

//   const animateParticles = useCallback(() => {
//     if (!cardRef.current || !isHoveredRef.current) return;

//     if (!particlesInitialized.current) {
//       initializeParticles();
//     }

//     memoizedParticles.current.forEach((particle, index) => {
//       const timeoutId = setTimeout(() => {
//         if (!isHoveredRef.current || !cardRef.current) return;

//         const clone = particle.cloneNode(true) as HTMLDivElement;
//         cardRef.current.appendChild(clone);
//         particlesRef.current.push(clone);

//         gsap.fromTo(
//           clone,
//           { scale: 0, opacity: 0 },
//           { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
//         );

//         gsap.to(clone, {
//           x: (Math.random() - 0.5) * 100,
//           y: (Math.random() - 0.5) * 100,
//           rotation: Math.random() * 360,
//           duration: 2 + Math.random() * 2,
//           ease: "none",
//           repeat: -1,
//           yoyo: true,
//         });

//         gsap.to(clone, {
//           opacity: 0.3,
//           duration: 1.5,
//           ease: "power2.inOut",
//           repeat: -1,
//           yoyo: true,
//         });
//       }, index * 100);

//       timeoutsRef.current.push(timeoutId);
//     });
//   }, [initializeParticles]);

//   useEffect(() => {
//     if (disableAnimations || !cardRef.current) return;

//     const element = cardRef.current;

//     const handleMouseEnter = () => {
//       isHoveredRef.current = true;
//       animateParticles();

//       if (enableTilt) {
//         gsap.to(element, {
//           rotateX: 5,
//           rotateY: 5,
//           duration: 0.3,
//           ease: "power2.out",
//           transformPerspective: 1000,
//         });
//       }
//     };

//     const handleMouseLeave = () => {
//       isHoveredRef.current = false;
//       clearAllParticles();

//       if (enableTilt) {
//         gsap.to(element, {
//           rotateX: 0,
//           rotateY: 0,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       }

//       if (enableMagnetism) {
//         gsap.to(element, {
//           x: 0,
//           y: 0,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!enableTilt && !enableMagnetism) return;

//       const rect = element.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       if (enableTilt) {
//         const rotateX = ((y - centerY) / centerY) * -10;
//         const rotateY = ((x - centerX) / centerX) * 10;

//         gsap.to(element, {
//           rotateX,
//           rotateY,
//           duration: 0.1,
//           ease: "power2.out",
//           transformPerspective: 1000,
//         });
//       }

//       if (enableMagnetism) {
//         const magnetX = (x - centerX) * 0.05;
//         const magnetY = (y - centerY) * 0.05;

//         magnetismAnimationRef.current = gsap.to(element, {
//           x: magnetX,
//           y: magnetY,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       }
//     };

//     const handleClick = (e: MouseEvent) => {
//       if (!clickEffect) return;

//       const rect = element.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const maxDistance = Math.max(
//         Math.hypot(x, y),
//         Math.hypot(x - rect.width, y),
//         Math.hypot(x, y - rect.height),
//         Math.hypot(x - rect.width, y - rect.height)
//       );

//       const ripple = document.createElement("div");
//       ripple.style.cssText = `
//         position: absolute;
//         width: ${maxDistance * 2}px;
//         height: ${maxDistance * 2}px;
//         border-radius: 50%;
//         background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
//         left: ${x - maxDistance}px;
//         top: ${y - maxDistance}px;
//         pointer-events: none;
//         z-index: 1000;
//       `;

//       element.appendChild(ripple);

//       gsap.fromTo(
//         ripple,
//         {
//           scale: 0,
//           opacity: 1,
//         },
//         {
//           scale: 1,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power2.out",
//           onComplete: () => ripple.remove(),
//         }
//       );
//     };

//     element.addEventListener("mouseenter", handleMouseEnter);
//     element.addEventListener("mouseleave", handleMouseLeave);
//     element.addEventListener("mousemove", handleMouseMove);
//     element.addEventListener("click", handleClick);

//     return () => {
//       isHoveredRef.current = false;
//       element.removeEventListener("mouseenter", handleMouseEnter);
//       element.removeEventListener("mouseleave", handleMouseLeave);
//       element.removeEventListener("mousemove", handleMouseMove);
//       element.removeEventListener("click", handleClick);
//       clearAllParticles();
//     };
//   }, [
//     animateParticles,
//     clearAllParticles,
//     disableAnimations,
//     enableTilt,
//     enableMagnetism,
//     clickEffect,
//     glowColor,
//   ]);

//   return (
//     <div
//       ref={cardRef}
//       className={`${className} relative overflow-hidden`}
//       style={{
//         ...style,
//         position: "relative",
//         overflow: "hidden",
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const GlobalSpotlight: React.FC<{
//   gridRef: React.RefObject<HTMLDivElement | null>;
//   disableAnimations?: boolean;
//   enabled?: boolean;
//   spotlightRadius?: number;
//   glowColor?: string;
// }> = ({
//   gridRef,
//   disableAnimations = false,
//   enabled = true,
//   spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
//   glowColor = DEFAULT_GLOW_COLOR,
// }) => {
//   const spotlightRef = useRef<HTMLDivElement | null>(null);
//   const isInsideSection = useRef(false);

//   useEffect(() => {
//     if (disableAnimations || !gridRef?.current || !enabled) return;

//     const spotlight = document.createElement("div");
//     spotlight.className = "global-spotlight";
//     spotlight.style.cssText = `
//       position: fixed;
//       width: 800px;
//       height: 800px;
//       border-radius: 50%;
//       pointer-events: none;
//       background: radial-gradient(circle,
//         rgba(${glowColor}, 0.15) 0%,
//         rgba(${glowColor}, 0.08) 15%,
//         rgba(${glowColor}, 0.04) 25%,
//         rgba(${glowColor}, 0.02) 40%,
//         rgba(${glowColor}, 0.01) 65%,
//         transparent 70%
//       );
//       z-index: 200;
//       opacity: 0;
//       transform: translate(-50%, -50%);
//       mix-blend-mode: screen;
//     `;
//     document.body.appendChild(spotlight);
//     spotlightRef.current = spotlight;

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!spotlightRef.current || !gridRef.current) return;

//       const section = gridRef.current.closest(".bento-section");
//       const rect = section?.getBoundingClientRect();
//       const mouseInside =
//         rect &&
//         e.clientX >= rect.left &&
//         e.clientX <= rect.right &&
//         e.clientY >= rect.top &&
//         e.clientY <= rect.bottom;

//       isInsideSection.current = mouseInside || false;
//       const cards = gridRef.current.querySelectorAll(".card");

//       if (!mouseInside) {
//         gsap.to(spotlightRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//         cards.forEach((card) => {
//           (card as HTMLElement).style.setProperty("--glow-intensity", "0");
//         });
//         return;
//       }

//       const { proximity, fadeDistance } =
//         calculateSpotlightValues(spotlightRadius);
//       let minDistance = Infinity;

//       cards.forEach((card) => {
//         const cardElement = card as HTMLElement;
//         const cardRect = cardElement.getBoundingClientRect();
//         const centerX = cardRect.left + cardRect.width / 2;
//         const centerY = cardRect.top + cardRect.height / 2;
//         const distance =
//           Math.hypot(e.clientX - centerX, e.clientY - centerY) -
//           Math.max(cardRect.width, cardRect.height) / 2;
//         const effectiveDistance = Math.max(0, distance);

//         minDistance = Math.min(minDistance, effectiveDistance);

//         let glowIntensity = 0;
//         if (effectiveDistance <= proximity) {
//           glowIntensity = 1;
//         } else if (effectiveDistance <= fadeDistance) {
//           glowIntensity =
//             (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
//         }

//         updateCardGlowProperties(
//           cardElement,
//           e.clientX,
//           e.clientY,
//           glowIntensity,
//           spotlightRadius
//         );
//       });

//       gsap.to(spotlightRef.current, {
//         left: e.clientX,
//         top: e.clientY,
//         duration: 0.1,
//         ease: "power2.out",
//       });

//       const targetOpacity =
//         minDistance <= proximity
//           ? 0.8
//           : minDistance <= fadeDistance
//           ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
//           : 0;

//       gsap.to(spotlightRef.current, {
//         opacity: targetOpacity,
//         duration: targetOpacity > 0 ? 0.2 : 0.5,
//         ease: "power2.out",
//       });
//     };

//     const handleMouseLeave = () => {
//       isInsideSection.current = false;
//       gridRef.current?.querySelectorAll(".card").forEach((card) => {
//         (card as HTMLElement).style.setProperty("--glow-intensity", "0");
//       });
//       if (spotlightRef.current) {
//         gsap.to(spotlightRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       }
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseleave", handleMouseLeave);
//       spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
//     };
//   }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

//   return null;
// };

// const BentoCardGrid: React.FC<{
//   children: React.ReactNode;
//   gridRef?: React.RefObject<HTMLDivElement | null>;
// }> = ({ children, gridRef }) => (
//   <div
//     className="bento-section grid gap-2 py-7 select-none relative bg-[#EFEFEF]"
//     style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
//     ref={gridRef}
//   >
//     {children}
//   </div>
// );

// const useMobileDetection = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () =>
//       setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return isMobile;
// };

// const MagicBento: React.FC<BentoProps> = ({
//   textAutoHide = true,
//   enableStars = true,
//   enableSpotlight = true,
//   enableBorderGlow = true,
//   disableAnimations = false,
//   spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
//   particleCount = DEFAULT_PARTICLE_COUNT,
//   enableTilt = false,
//   glowColor = DEFAULT_GLOW_COLOR,
//   clickEffect = true,
//   enableMagnetism = true,
// }) => {
//   const gridRef = useRef<HTMLDivElement>(null);
//   const isMobile = useMobileDetection();
//   const shouldDisableAnimations = disableAnimations || isMobile;

//   return (
//     <>
//       <style>
//         {`
//           .bento-section {
//             --glow-x: 50%;
//             --glow-y: 50%;
//             --glow-intensity: 0;
//             --glow-radius: 200px;
//             --glow-color: ${glowColor};
//             --border-color: #FFFFFF;
//             --background-dark: #060010;
//             --white: hsl(0, 0%, 100%);
//             --purple-primary: rgba(132, 0, 255, 1);
//             --purple-glow: rgba(132, 0, 255, 0.2);
//             --purple-border: rgba(132, 0, 255, 0.8);
//           }

//           .card-responsive {
//             grid-template-columns: 2fr;
//             width: 100%;
//           }

//           /* --------------------------------------------
//            * NEW: Small-desktop / tablet layout (2 cols x 5 rows)
//            * Matches the provided UI. Does NOT touch >=1024px rules.
//            * -------------------------------------------- */
//                     @media  (max-width: 1023px) {
//             .card-responsive {
//               grid-template-columns: repeat(2, 1fr);
//               grid-template-rows: repeat(4, minmax(140px, 1fr));
//             }

//             /* Let grid row heights control items at this breakpoint */
//             .card-responsive .card {
//             }

//             /* Left tall (rows 1-3) */
//             .card-responsive .card:nth-child(1) {
//               grid-column: 1;
//               grid-row: 1 / span 2;
//             }

//             /* Right top two */
//             .card-responsive .card:nth-child(2) {
//               grid-column: 2;
//               grid-row: 1;
//             }
//             .card-responsive .card:nth-child(3) {
//               grid-column: 2;
//               grid-row: 2;
//               min-height: 140px !important;
//             }

//             /* Left middle small */
//             .card-responsive .card:nth-child(4) {
//               grid-column: 1;
//               grid-row: 3;
//             }

//             /* Center logo tile */
//             .card-responsive .card:nth-child(5) {
//               grid-column: 2;
//               grid-row: 3;
//               height: 10px !important;
//               align-self: start;
//             }

//             /* Right bottom tall (rows 4-5) */
//             .card-responsive .card:nth-child(6) {
//               grid-column: 1;
//               grid-row: 4;
//             }

//             /* Left bottom small */
//             .card-responsive .card:nth-child(7) {
//               grid-column: 2;
//               grid-row: 3/span 2;
//             }
//           }

//           /* Desktop (UNCHANGED as requested) */
//           @media (min-width: 1024px) {
//             .card-responsive {
//               grid-template-columns: repeat(7, 1fr);
//               grid-template-rows: 300px 100px 1fr 1fr;
//               height: 97vh;
//               padding: 0.5rem;
//             }

//             .card-responsive .card:nth-child(1) {
//               grid-column: 1 / span 2;
//             }
//            .card-responsive .card:nth-child(2) {
//               grid-column: 3 / span 2;
//             }
//             .card-responsive .card:nth-child(3) {
//               grid-column: span 3;
//               grid-row: span 2;
//             }

//             .card-responsive .card:nth-child(4) {
//               grid-column: 1 / span 3;
//               grid-row: 2 / span 2;
//             }
//               .card-responsive .card:nth-child(5) {
//               grid-column: 4;
//               grid-row: 2;
//               height: 100px !important;
//             }

//             .card-responsive .card:nth-child(6) {
//               grid-column: 4 / span 2;
//               grid-row: 3;
//             }
//                .card-responsive .card:nth-child(7) {
//               grid-column: 6 /span 2;
//               grid-row: 3;
//             }
//           }

//           .card--border-glow::after {
//             content: '';
//             position: absolute;
//             inset: 0;
//             padding: 6px;
//             background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
//                 rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 0%,
//                 rgba(${glowColor}, calc(var(--glow-intensity) * 0.2)) 30%,
//                 transparent 60%);
//             border-radius: inherit;
//             mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//             mask-composite: subtract;
//             -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//             -webkit-mask-composite: xor;
//             pointer-events: none;
//             transition: opacity 0.3s ease;
//             z-index: 1;
//           }

//           .card--border-glow:hover::after {
//             opacity: 1;
//           }

//           .card--border-glow:hover {
//             box-shadow: 0 2px 10px rgba(46, 24, 78, 0.4), 0 0 20px rgba(${glowColor}, 0.01);
//           }

//           .particle::before {
//             content: '';
//             position: absolute;
//             top: -2px;
//             left: -2px;
//             right: -2px;
//             bottom: -2px;
//             background: rgba(${glowColor}, 0.2);
//             border-radius: 50%;
//             z-index: -1;
//           }

//           .particle-container:hover {
//             box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
//           }

//           .text-clamp-1 {
//             display: -webkit-box;
//             -webkit-box-orient: vertical;
//             -webkit-line-clamp: 1;
//             line-clamp: 1;
//             overflow: hidden;
//             text-overflow: ellipsis;
//           }

//           .text-clamp-2 {
//             display: -webkit-box;
//             -webkit-box-orient: vertical;
//             -webkit-line-clamp: 2;
//             line-clamp: 2;
//             overflow: hidden;
//             text-overflow: ellipsis;
//           }

//         `}
//       </style>

//       {enableSpotlight && (
//         <GlobalSpotlight
//           gridRef={gridRef}
//           disableAnimations={shouldDisableAnimations}
//           enabled={enableSpotlight}
//           spotlightRadius={spotlightRadius}
//           glowColor={glowColor}
//         />
//       )}

//       <BentoCardGrid gridRef={gridRef}>
//         <div className="card-responsive grid gap-2 font-mono">
//           {cardData.map((card, index) => {
//             const isFifth = index === 4;
//             const baseClassName = `card flex flex-col bg-[#FFFFFF] justify-between relative aspect-[4/3] min-h-[100px]  ${
//               isFifth || index === 2 ? "p-0" : "p-5"
//             } w-full max-w-full rounded-xl border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
//               enableBorderGlow ? "card--border-glow" : ""
//             }`;

//             const cardStyle = {
//               backgroundColor:
//                 index === 4
//                   ? "#EFEFEF"
//                   : card.color || "var(--background-dark)",
//               borderColor: index === 4 ? "#EFEFEF" : "var(--border-color)",
//               "--glow-x": "50%",
//               "--glow-y": "50%",
//               "--glow-intensity": "0",
//               "--glow-radius": "200px",
//             } as React.CSSProperties;

//             if (enableStars) {
//               return (
//                 <ParticleCard
//                   key={index}
//                   className={baseClassName}
//                   style={cardStyle}
//                   disableAnimations={shouldDisableAnimations}
//                   particleCount={particleCount}
//                   glowColor={glowColor}
//                   enableTilt={enableTilt}
//                   clickEffect={clickEffect}
//                   enableMagnetism={enableMagnetism}
//                 >
//                   {isFifth ? (
//                     <figure className="w-10 lg:w-14 m-auto">
//                       <img
//                         src={logoUrl}
//                         alt="Logo"
//                         className="w-full h-full object-cover"
//                         draggable={false}
//                       />
//                     </figure>
//                   ) : index === 2 ? (
//                     <div className="flex flex-col h-full w-full">
//                       <div className="flex-1 relative overflow-hidden">
//                         <video
//                           src={aiUxVideo}
//                           autoPlay
//                           loop
//                           muted
//                           playsInline
//                           className="h-full w-full object-cover"
//                         />
//                       </div>
//                       <div className="bg-black text-white px-3 py-2 text-center shrink-0">
//                         <p className="text-[10px] sm:text-xs md:text-sm leading-snug tracking-wide uppercase m-0">
//                           Power your apps with blockchain tech—secure
//                           transparent, unstoppable.
//                         </p>
//                       </div>
//                     </div>
//                   ) : (
//                     // <MetallicLogo />
//                     <div className="card__header flex flex-col justify-between gap-3 relative font-semibold text-xs lg:text-2xl 2xl:text-3xl uppercase">
//                       <h3 className={`card__title m-0 mb-1`}>{card.title}</h3>
//                     </div>
//                   )}
//                 </ParticleCard>
//               );
//             }

//             return (
//               <div
//                 key={index}
//                 className={baseClassName}
//                 style={cardStyle}
//                 ref={(el) => {
//                   if (!el) return;

//                   const handleMouseMove = (e: MouseEvent) => {
//                     if (shouldDisableAnimations) return;

//                     const rect = el.getBoundingClientRect();
//                     const x = e.clientX - rect.left;
//                     const y = e.clientY - rect.top;
//                     const centerX = rect.width / 2;
//                     const centerY = rect.height / 2;

//                     if (enableTilt) {
//                       const rotateX = ((y - centerY) / centerY) * -10;
//                       const rotateY = ((x - centerX) / centerX) * 10;

//                       gsap.to(el, {
//                         rotateX,
//                         rotateY,
//                         duration: 0.1,
//                         ease: "power2.out",
//                         transformPerspective: 1000,
//                       });
//                     }

//                     if (enableMagnetism) {
//                       const magnetX = (x - centerX) * 0.05;
//                       const magnetY = (y - centerY) * 0.05;

//                       gsap.to(el, {
//                         x: magnetX,
//                         y: magnetY,
//                         duration: 0.3,
//                         ease: "power2.out",
//                       });
//                     }
//                   };

//                   const handleMouseLeave = () => {
//                     if (shouldDisableAnimations) return;

//                     if (enableTilt) {
//                       gsap.to(el, {
//                         rotateX: 0,
//                         rotateY: 0,
//                         duration: 0.3,
//                         ease: "power2.out",
//                       });
//                     }

//                     if (enableMagnetism) {
//                       gsap.to(el, {
//                         x: 0,
//                         y: 0,
//                         duration: 0.3,
//                         ease: "power2.out",
//                       });
//                     }
//                   };

//                   const handleClick = (e: MouseEvent) => {
//                     if (!clickEffect || shouldDisableAnimations) return;

//                     const rect = el.getBoundingClientRect();
//                     const x = e.clientX - rect.left;
//                     const y = e.clientY - rect.top;

//                     const maxDistance = Math.max(
//                       Math.hypot(x, y),
//                       Math.hypot(x - rect.width, y),
//                       Math.hypot(x, y - rect.height),
//                       Math.hypot(x - rect.width, y - rect.height)
//                     );

//                     const ripple = document.createElement("div");
//                     ripple.style.cssText = `
//                       position: absolute;
//                       width: ${maxDistance * 2}px;
//                       height: ${maxDistance * 2}px;
//                       border-radius: 50%;
//                       background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
//                       left: ${x - maxDistance}px;
//                       top: ${y - maxDistance}px;
//                       pointer-events: none;
//                       z-index: 1000;
//                     `;

//                     el.appendChild(ripple);

//                     gsap.fromTo(
//                       ripple,
//                       {
//                         scale: 0,
//                         opacity: 1,
//                       },
//                       {
//                         scale: 1,
//                         opacity: 0,
//                         duration: 0.8,
//                         ease: "power2.out",
//                         onComplete: () => ripple.remove(),
//                       }
//                     );
//                   };

//                   el.addEventListener("mousemove", handleMouseMove);
//                   el.addEventListener("mouseleave", handleMouseLeave);
//                   el.addEventListener("click", handleClick);
//                 }}
//               >
//                 <div className="card__header flex justify-between gap-3 relative ">
//                   <span className="card__label text-base">{card.label}</span>
//                 </div>
//                 <div className="card__content flex flex-col relative ">
//                   <h3
//                     className={`card__title font-normal text-base m-0 mb-1 ${
//                       textAutoHide ? "text-clamp-1" : ""
//                     }`}
//                   >
//                     {card.title}
//                   </h3>
//                   <p
//                     className={`card__description text-xs leading-5 opacity-90 ${
//                       textAutoHide ? "text-clamp-2" : ""
//                     }`}
//                   >
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </BentoCardGrid>
//     </>
//   );
// };

// export default MagicBento;

import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { BentoCardProps, BentoProps } from "../types";
import logoUrl from "../assets/logo.png";

// ✅ Import separate videos per card (adjust paths/names to your files)
import video1 from "../assets/first.mp4"; // 1st card
import video2 from "../assets/two.mp4"; // 2nd card
import aiUxVideo from "../assets/ai.mp4"; // 3rd card (your existing special one)
import video4 from "../assets/four.mp4"; // 4th card
import video6 from "../assets/six.mp4"; // 6th card
import video7 from "../assets/seven.mp4"; // 7th card

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

// Keep the array only to control count/layout. No text is rendered.
const cardData: BentoCardProps[] = [
  {}, // 1
  {}, // 2
  {}, // 3 (special caption)
  {}, // 4
  {}, // 5 (logo)
  {}, // 6
  {}, // 7
];

// Map card index → video file (null for the logo card)
const videoByIndex: Record<number, string | null> = {
  0: video1,
  1: video2,
  2: aiUxVideo, // special layout
  3: video4,
  4: null, // logo only
  5: video6,
  6: video7,
};

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR
): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{
        ...style,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".card");

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
          ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
          : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll(".card").forEach((card) => {
        (card as HTMLElement).style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
  <div
    className="bento-section grid gap-2 py-7 select-none relative bg-[#EFEFEF]"
    style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const MagicBento: React.FC<BentoProps> = ({
  textAutoHide = true, // ignored (no text)
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  // Common video element
  const renderVideo = (src: string) => (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
    />
  );

  // Per-card content
  const renderCardContent = (index: number) => {
    if (index === 4) {
      // Logo card
      return (
        <figure className="w-10 lg:w-14 m-auto">
          <img
            src={logoUrl}
            alt="Logo"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </figure>
      );
    }

    if (index === 2) {
      // Special layout: video + caption (kept as requested)
      return (
        <div className="flex flex-col h-full w-full">
          <div className="flex-1 relative overflow-hidden">
            {renderVideo(videoByIndex[index]!)}
          </div>
          <div className="bg-black text-white px-3 py-2 text-center shrink-0">
            <p className="text-[10px] sm:text-xs md:text-sm leading-snug tracking-wide uppercase m-0">
              Power your apps with blockchain tech — secure, transparent,
              unstoppable.
            </p>
          </div>
        </div>
      );
    }

    // Plain video card
    return (
      <div className="relative h-full w-full overflow-hidden">
        {renderVideo(videoByIndex[index]!)}
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #FFFFFF;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }

          .card-responsive {
            grid-template-columns: 2fr;
            width: 100%;
          }

          /* Small-desktop / tablet (2 cols) */
          @media (max-width: 1023px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: repeat(4, minmax(120px, 1fr));
            }

            .card-responsive .card:nth-child(1) { grid-column: 1; grid-row: 1 ; }
            .card-responsive .card:nth-child(2) { grid-column: 1; grid-row: 2; }
            .card-responsive .card:nth-child(3) { grid-column: 2; grid-row: 1 /span 2; min-height: 120px !important; }
            .card-responsive .card:nth-child(4) { grid-column: 1; grid-row: 3 /span 2 ; }
            .card-responsive .card:nth-child(5) { grid-column: 2; grid-row: 3; height: 10px !important; align-self: start; }
            .card-responsive .card:nth-child(6) { grid-column: 2; grid-row: 3; }
            .card-responsive .card:nth-child(7) { grid-column: 2; grid-row: 4; }
          }

          /* Desktop */
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(7, 1fr);
              grid-template-rows:  repeat(7, minmax(12dvh, 12dvh));
               
            }

            .card-responsive .card:nth-child(1) { grid-column: 1 / span 2; grid-row: 1/ span 3;  }
            .card-responsive .card:nth-child(2) { grid-column: 3 / span 2; grid-row: 1/ span 3; }
            .card-responsive .card:nth-child(3) { grid-column: 5/span 3; grid-row: 1/span 4; }
            .card-responsive .card:nth-child(4) { grid-column: 1 / span 3; grid-row: 4 / span 4; }
            .card-responsive .card:nth-child(5) { grid-column: 4; grid-row: 4;}
            .card-responsive .card:nth-child(6) { grid-column: 4 / span 2; grid-row: 5/span 3; }
            .card-responsive .card:nth-child(7) { grid-column: 6 / span 2; grid-row: 5/span 3; }
          }

          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
              rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 0%,
              rgba(${glowColor}, calc(var(--glow-intensity) * 0.2)) 30%,
              transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }

          .card--border-glow:hover::after { opacity: 1; }
          .card--border-glow:hover { box-shadow: 0 2px 10px rgba(46, 24, 78, 0.4), 0 0 20px rgba(${glowColor}, 0.01); }

          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }

          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className="card-responsive grid gap-2 font-mono">
          {cardData.map((_, index) => {
            const isLogo = index === 4;

            const baseClassName = `card flex flex-col bg-[#FFFFFF] justify-between relative
              aspect-[4/3]  ${isLogo || index === 2 ? "p-0" : "p-0"}
              w-full max-w-full rounded-xl border border-solid overflow-hidden
              transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
              ${enableBorderGlow ? "card--border-glow" : ""}`;

            const cardStyle = {
              backgroundColor: isLogo ? "#EFEFEF" : "#FFFFFF",
              borderColor: isLogo ? "#EFEFEF" : "var(--border-color)",
              "--glow-x": "50%",
              "--glow-y": "50%",
              "--glow-intensity": "0",
              "--glow-radius": "200px",
            } as React.CSSProperties;

            const content = renderCardContent(index);

            // Stars/glow version
            if (enableStars) {
              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={DEFAULT_PARTICLE_COUNT}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  {content}
                </ParticleCard>
              );
            }

            // Fallback (no stars)
            return (
              <div key={index} className={baseClassName} style={cardStyle}>
                {content}
              </div>
            );
          })}
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
