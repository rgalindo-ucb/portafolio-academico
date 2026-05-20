import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";

type ProjectCaseStudySectionProps = {
  children: ReactNode;
  kicker?: string;
  title: string;
};

export function ProjectCaseStudySection({
  children,
  kicker,
  title,
}: ProjectCaseStudySectionProps) {
  return (
    <Reveal>
      <section className="project-case-section rounded-lg border p-6 sm:p-8">
        {kicker ? (
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--subject-accent)]">
            {kicker}
          </span>
        ) : null}
        <h2 className="font-editorial mt-3 text-3xl font-normal leading-tight text-[var(--subject-text)] sm:text-4xl">
          {title}
        </h2>
        <div className="mt-5 text-sm leading-7 text-[color-mix(in_srgb,var(--subject-text)_72%,transparent)]">
          {children}
        </div>
      </section>
    </Reveal>
  );
}
