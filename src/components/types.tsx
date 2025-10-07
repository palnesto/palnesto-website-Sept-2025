import vXpoll from "../components/assets/globe.mp4";
import vDasmore from "../components/assets/hero.mp4";
import p1 from "../components/assets/ngcover.png";
import p2 from "../components/assets/nigecoincover.jpg";
import p3 from "../components/assets/CA-cover.jpg";
import p4 from "../components/assets/GGpcover.jpg";
import p5 from "../components/assets/DSGlobal.gif";
import p6 from "../components/assets/fabreco.gif";
import p9 from "../components/assets/lemme.jpg";
import p10 from "../components/assets/A4.png";
import p11 from "../components/assets/birdsongpro.jpg";
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
    mediaType: "video",
    src: vXpoll,
    title: "XPoll",
    link: "/portfolio/Xpoll",
    description:
      "Nigecoin is a Web3-powered employment platform dedicated to tackling...",
  },
  {
    mediaType: "video",
    src: vDasmore,
    title: "Dasmore",
    link: "/portfolio/Dasmore",
    description:
      "DasMore Solutions LLC is a deep-tech company focused on solving one...",
  },

  {
    mediaType: "image",
    src: p1,
    title: "Nige Global",
    link: "/portfolio/NigeGlobal",
    description:
      "Decentralizing opportunity and employment across Africa through Web3...",
  },
  {
    mediaType: "image",
    src: p2,
    title: "Nigecoin",
    link: "/portfolio/Nigecoin",
    description: "Nigecoin is a Web3-powered employment platform dedicated...",
  },
  {
    mediaType: "image",
    src: p3,
    title: "Commander Ape",
    link: "/portfolio/CommanderApe",
    description:
      "Commander Ape Coin (CAC) is more than just a meme coin it’s a movement...",
  },
  {
    mediaType: "image",
    src: p4,
    title: "Grumpy Grandpa",
    link: "/portfolio/GrumpyGrandpa",
    description:
      "Grumpy Grandpa Coin (GGC) is a meme coin inspired by the famously grumpy...",
  },

  {
    mediaType: "gif",
    src: p5,
    title: "D&S Global Solution",
    link: "/portfolio/DSGlobal",
    description:
      "Since its inception in 1997, D&S Global Solutions has served clients...",
  },
  {
    mediaType: "gif",
    src: p6,
    title: "Fabreco",
    link: "/portfolio/Fabreco",
    description:
      "Fabreco is a fast-moving consumer goods (FMCG) firm that specialisess...",
  },

  {
    mediaType: "image",
    src: p10,
    title: "Axis Solar",
    link: "/portfolio/AxisSolar",
    description:
      "Axis Solar specialises in residential and commercial solar system design...",
  },
  {
    mediaType: "image",
    src: p11,
    title: "Bird Song",
    link: "/portfolio/BirdSong",
    description:
      "BirdSong is an Ed-tech company that focuses on digitalizing school operations...",
  },
  {
    mediaType: "image",
    src: p12,
    title: "SaitaCard",
    link: "/portfolio/saitaCard",
    description:
      "SaitaCard is a crypto based debit card powered by MasterCard, the proud SaitaCard...",
  },
  {
    mediaType: "image",
    src: p13,
    title: "Smart Internz",
    link: "/portfolio/SmartInternz",
    description:
      "SMARTBRIDGE is an EdTech company to bridge the divide between academia, corporate...",
  },
  {
    mediaType: "image",
    src: p9,
    title: "Lemme be",
    link: "/portfolio/LemmeBe",
    description:
      "Lemme Be is in the field of women’s hygiene, sanitary products, and hygiene education...",
  },
];
