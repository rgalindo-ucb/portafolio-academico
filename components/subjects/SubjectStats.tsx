import { Award, Files, Layers3, Target } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { AnimatedSectionHeader } from "@/components/subjects/AnimatedSectionHeader";
import { SubjectVisualBackground } from "@/components/subjects/SubjectVisualBackground";
import { Badge } from "@/components/ui/badge";
import type { ProjectType } from "@/types/project";
import type { Subject } from "@/types/subject";

type SubjectStatsProps = {
  subject: Subject;
  stats: {
    totalProjects: number;
    featuredProjects: number;
    types: ProjectType[];
  };
};

export function SubjectStats({ subject, stats }: SubjectStatsProps) {
  const statItems = [
    {
      label: "Trabajos",
      value: stats.totalProjects,
      icon: Files,
    },
    {
      label: "Destacados",
      value: stats.featuredProjects,
      icon: Award,
    },
    {
      label: "Tipos",
      value: stats.types.length,
      icon: Layers3,
    },
  ];

  return (
    <section className="subject-scroll-section subject-scroll-section--solid section-padding relative overflow-hidden border-b subject-section">
      <SubjectVisualBackground variant="solid" />
      <div className="container relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <AnimatedSectionHeader
            description={subject.academicFocus}
            kicker="Resumen de materia"
            number="01"
            title="Foco academico y evidencias asociadas."
          />
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {statItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.label} delay={index * 0.08} y={24}>
                  <article className="premium-panel subject-card p-5">
                    <div className="relative z-10">
                      <Icon
                        className="h-6 w-6 text-[var(--subject-accent)]"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="relative z-10 font-editorial mt-8 text-5xl font-normal text-[var(--subject-text)]">
                      {item.value}
                    </p>
                    <p className="relative z-10 mt-2 text-sm text-muted-foreground">
                      {item.label}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.18} y={10}>
            <div className="premium-panel p-5">
              <div className="flex items-center gap-3">
                <Target
                  className="h-5 w-5 text-[var(--subject-accent)]"
                  aria-hidden="true"
                />
                <h3 className="font-semibold">Tipos de trabajos realizados</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {stats.types.map((type, index) => (
                  <Reveal key={type} delay={0.22 + index * 0.04} y={10}>
                    <Badge className="subject-badge" variant="outline">
                      {type}
                    </Badge>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
