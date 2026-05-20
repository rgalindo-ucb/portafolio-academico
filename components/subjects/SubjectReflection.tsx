import type { CSSProperties } from "react";
import { Quote } from "lucide-react";

import { ParallaxBlock } from "@/components/motion/ParallaxBlock";
import { Reveal } from "@/components/motion/Reveal";
import { SubjectVisualBackground } from "@/components/subjects/SubjectVisualBackground";
import type { Subject } from "@/types/subject";

type SubjectReflectionProps = {
  subject: Subject;
};

export function SubjectReflection({ subject }: SubjectReflectionProps) {
  return (
    <section className="subject-scroll-section subject-scroll-section--reflection section-padding relative overflow-hidden">
      <div className="container">
        <Reveal y={34}>
          <div
            className="relative overflow-hidden rounded-lg border p-8 shadow-2xl shadow-black/20 sm:p-10 subject-card"
            style={{ background: subject.gradient } as CSSProperties}
          >
            <ParallaxBlock amount={-5} className="absolute inset-0">
              <SubjectVisualBackground
                imageUrl={subject.visuals.reflectionImage ?? subject.visuals.heroImage}
                intensity="high"
                variant="reflectionImage"
              />
            </ParallaxBlock>
            <div className="relative z-10">
              <Reveal delay={0.08} y={18}>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[var(--subject-accent)]">
                    05
                  </span>
                  <Quote
                    className="h-9 w-9"
                    style={{ color: subject.color.accent }}
                    aria-hidden="true"
                  />
                  <span className="h-px flex-1 subject-line" />
                </div>
              </Reveal>
              <Reveal delay={0.14} y={20}>
                <h2 className="font-editorial mt-8 max-w-4xl text-4xl font-normal leading-tight text-white sm:text-5xl">
                  Reflexion de materia
                </h2>
              </Reveal>
              <Reveal delay={0.2} y={8}>
                <div className="mt-6 h-px max-w-2xl subject-line" />
              </Reveal>
              <Reveal delay={0.26} y={18}>
                <p className="mt-6 max-w-4xl text-base leading-8 text-white/82">
                  {subject.reflection}
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
