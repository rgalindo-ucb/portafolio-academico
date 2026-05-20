import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type SubjectVisualBackgroundProps = {
  imageUrl?: string;
  variant?:
    | "hero"
    | "section"
    | "reflection"
    | "card"
    | "heroImage"
    | "solid"
    | "editorialImage"
    | "functionalSolid"
    | "textured"
    | "reflectionImage"
    | "transition";
  intensity?: "low" | "medium" | "high" | number;
  className?: string;
};

const intensitySettings = {
  low: {
    image: 0.72,
    dark: 0.28,
    tone: 0.14,
    glow: 0.16,
  },
  medium: {
    image: 0.6,
    dark: 0.38,
    tone: 0.22,
    glow: 0.22,
  },
  high: {
    image: 0.58,
    dark: 0.5,
    tone: 0.28,
    glow: 0.28,
  },
};

function getIntensitySettings(intensity: SubjectVisualBackgroundProps["intensity"]) {
  if (typeof intensity === "number") {
    const image = Math.min(Math.max(intensity, 0.25), 0.82);

    return {
      image,
      dark: 0.42,
      tone: 0.22,
      glow: 0.2,
    };
  }

  return intensitySettings[intensity ?? "medium"];
}

export function SubjectVisualBackground({
  imageUrl,
  variant = "textured",
  intensity = "medium",
  className,
}: SubjectVisualBackgroundProps) {
  const canRenderWithoutImage = [
    "solid",
    "functionalSolid",
    "transition",
    "textured",
  ].includes(variant);

  if (!imageUrl && !canRenderWithoutImage) {
    return null;
  }

  const settings = getIntensitySettings(intensity);

  return (
    <div
      aria-hidden="true"
      className={cn("subject-visual-bg", `subject-visual-bg--${variant}`, className)}
      style={
        {
          "--subject-visual-image": `url("${imageUrl}")`,
          "--subject-image-opacity": settings.image,
          "--subject-dark-opacity": settings.dark,
          "--subject-tone-opacity": settings.tone,
          "--subject-glow-opacity": settings.glow,
        } as CSSProperties
      }
    >
      <div className="subject-visual-bg__image" />
      <div className="subject-visual-bg__dark" />
      <div className="subject-visual-bg__tone" />
      <div className="subject-visual-bg__glow" />
    </div>
  );
}
