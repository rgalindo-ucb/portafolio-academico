import { BadgeCheck } from "lucide-react";

import { ParallaxBlock } from "@/components/motion/ParallaxBlock";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedSectionHeader } from "@/components/subjects/AnimatedSectionHeader";
import { SubjectVisualBackground } from "@/components/subjects/SubjectVisualBackground";
import type { Subject } from "@/types/subject";

type SubjectCompetenciesProps = {
  subject: Subject;
};

export function SubjectCompetencies({ subject }: SubjectCompetenciesProps) {
  return (
    <section className="subject-scroll-section subject-scroll-section--textured section-padding relative overflow-hidden border-y subject-section-soft">
      <ParallaxBlock amount={-4} className="absolute inset-0">
        <SubjectVisualBackground
          imageUrl={subject.visuals.textureImage}
          intensity="low"
          variant="textured"
        />
      </ParallaxBlock>
      <div className="container relative z-10">
        <AnimatedSectionHeader
          kicker="Competencias desarrolladas"
          number="04"
          title="Capacidades que quedan como evidencia del proceso."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {subject.competencies.map((competency, index) => (
            <Reveal key={competency} delay={index * 0.055} y={22}>
              <article className="premium-panel subject-card p-5">
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <BadgeCheck
                    className="h-6 w-6 text-[var(--subject-accent)]"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-[color-mix(in_srgb,var(--subject-accent)_72%,transparent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative z-10 mt-8 text-sm font-semibold leading-6">
                  {competency}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
