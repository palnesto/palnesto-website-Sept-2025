/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: "#13BE5A",
        blue: "#030E2E",
        gray: "#808286",
        "color-chrome": "#4285F4",
        "color-safari": "#FFAC44",
        "color-firefox": "#FF7139",
        "color-edge": "#0078D7",
        "color-other": "#A1A1A1",
      },
      boxShadow: {
        custom: "0px 20px 30px -20px rgb(11,32,47)",
      },
      fontFamily: {
        "heading-font": ["Benz Grotesk"],
        "body-font": ["Helvetica", "Arial", "sans-serif"],
        xenku: ["Xenku", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        footerimg: "url('/footerImage.png')",
        teambg: "url('/teambg.png')",
        aboutbg: "url('/connecting.png')",
        leftimg: "url('/sideImage.png')",
        graphimg: "url('/graph.png')",
        localimg: "url('/images.jpeg')",
        "coin-gradient":
          "radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(0, 169, 255, 0.4) 40%, #001f3f 100%)",
        "purple-gradient":
          "radial-gradient(50% 50% at 50% 50%, #A400A9 0%, #010425 100%)",
        "blue-gradient":
          "radial-gradient(50% 50% at 50% 50%, #102E65 0%, #010425 100%)",
        "button-gradient":
          "linear-gradient(94.54deg, #9C13BE 9.5%, #3732D1 90.5%)",
      },

      screens: {
        xs: { min: "320px", max: "640px" },
        "custom-lg": { max: "1089px", min: "1024px" },
        "4k": "2560px",
        "max-container": "1980px",
      },
      animation: {
        spin360: "spin360 3s linear infinite",
        moveInfiniteSm: "moveLeftToRight 3s ease-in-out infinite",
        moveInfiniteMd: "moveLeftToRight 5s ease-in-out infinite",
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        spin360: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        moveLeftToRight: {
          "0%": { left: "-360px", opacity: 0.2 },
          "97%": { left: "150vw" },
          "99%": { left: "150vw", opacity: 0 },
          "100%": { left: "-360px", opacity: 0 },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
