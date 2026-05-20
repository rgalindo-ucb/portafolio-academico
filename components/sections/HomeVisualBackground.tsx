import type { CSSProperties } from "react";

import { subjects } from "@/data/subjects";

export function HomeVisualBackground() {
  const tones = subjects.map((subject) => subject.color);

  return (
    <div className="home-page-background" aria-hidden="true">
      <div className="home-page-background__mesh" />
      <div className="home-page-background__grid" />
      {tones.map((tone, index) => (
        <div
          key={`${tone.primary}-${index}`}
          className={`home-page-background__glow home-page-background__glow--${index + 1}`}
          style={
            {
              "--home-glow-primary": tone.primary,
              "--home-glow-accent": tone.accent,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
