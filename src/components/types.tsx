import p1 from "../components/assets/A4.png";
import p2 from "../components/assets/CA-cover.jpg";
import p3 from "../components/assets/DSGlobal.gif";
import p4 from "../components/assets/GGpcover.jpg";
import p5 from "../components/assets/birdsongpro.jpg";
import p6 from "../components/assets/fabreco.gif";
import p7poster from "../components/assets/globe.mp4";
import p8poster from "../components/assets/hero.mp4";
import p9 from "../components/assets/lemme.jpg";
import p10 from "../components/assets/ngcover.png";
import p11 from "../components/assets/nigecoincover.jpg";
import p12 from "../components/assets/saitachain.png";
import p13 from "../components/assets/smart.png";
export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

export type NextSectionProps = {
  id?: string;
};

export const items = [
  {
    image: p1,
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: p2,
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: p3,
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: p4,
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
  {
    image: p5,
    link: "https://google.com/",
    title: "Item 5",
    description: "This is pretty cool, right?",
  },
  {
    image: p6,
    link: "https://google.com/",
    title: "Item 6",
    description: "This is pretty cool, right?",
  },

  // mp4s replaced by posters
  {
    image: p7poster,
    link: "https://google.com/",
    title: "Item 7",
    description: "This is pretty cool, right?",
  },
  {
    image: p8poster,
    link: "https://google.com/",
    title: "Item 8",
    description: "This is pretty cool, right?",
  },

  {
    image: p9,
    link: "https://google.com/",
    title: "Item 9",
    description: "This is pretty cool, right?",
  },
  {
    image: p10,
    link: "https://google.com/",
    title: "Item 10",
    description: "This is pretty cool, right?",
  },
  {
    image: p11,
    link: "https://google.com/",
    title: "Item 11",
    description: "This is pretty cool, right?",
  },
  {
    image: p12,
    link: "https://google.com/",
    title: "Item 12",
    description: "This is pretty cool, right?",
  },
  {
    image: p13,
    link: "https://google.com/",
    title: "Item 13",
    description: "This is pretty cool, right?",
  },
];
