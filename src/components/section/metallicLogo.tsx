import { useState, useEffect } from "react";
import logo from "../../components/assets/Logo.svg";
import MetallicPaint, { parseLogoImage } from "../common/MetallicPaint";

export const MetallicLogo = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
  }, []);

  return (
    <MetallicPaint
      imageData={imageData ?? new ImageData(1, 1)}
      params={{
        edge: 2,
        patternBlur: 0.005,
        patternScale: 2,
        refraction: 0.015,
        speed: 0.3,
        liquid: 0.07,
      }}
    />
  );
};
