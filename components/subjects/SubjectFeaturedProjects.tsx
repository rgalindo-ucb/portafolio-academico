import type { CSSProperties } from "react";

import { ParallaxBlock } from "@/components/motion/ParallaxBlock";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimatedSectionHeader } from "@/components/subjects/AnimatedSectionHeader";
import { SubjectVisualBackground } from "@/components/subjects/SubjectVisualBackground";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";
import type { Subject } from "@/types/subject";

type SubjectFeaturedProjectsProps = {
  subject: Subject;
  featuredProjects: Project[];
};

export function SubjectFeaturedProjects({
  subject,
  featuredProjects,
}: SubjectFeaturedProjectsProps) {
  const showcasedProjects = featuredProjects.slice(0, 3);

  return (
    <section
      className="subject-scroll-section subject-scroll-section--image section-padding relative overflow-hidden"
      id="trabajos-destacados"
    >
      <ParallaxBlock amount={-3} className="absolute inset-0">
        <SubjectVisualBackground
          imageUrl={subject.visuals.featuredImage}
          intensity="medium"
          variant="editorialImage"
        />
      </ParallaxBlock>
      <div className="container relative z-10 -mt-4 sm:-mt-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSectionHeader
            description="Una seleccion de proyectos que representan los principales aprendizajes de la materia."
            kicker="Trabajos destacados"
            number="02"
            title={`Showcase de ${subject.shortName}.`}
          />
          <Badge className="subject-badge-accent" variant="secondary">
            {showcasedProjects.length} destacados
          </Badge>
        </div>

        <Reveal delay={0.08} y={28}>
          <div className="mt-10 grid overflow-hidden rounded-lg border subject-card lg:grid-cols-[0.92fr_1.08fr]">
            <ParallaxBlock amount={-5}>
              <div
                aria-hidden="true"
                className="min-h-56 subject-editorial-image"
              >
                <div
                  className="subject-editorial-image__media"
                  style={
                    {
                      backgroundImage: `url("${subject.visuals.featuredImage ?? subject.visuals.heroImage}")`,
                    } as CSSProperties
                  }
                />
              </div>
            </ParallaxBlock>
            <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--subject-accent)]">
                Seleccion curada
              </span>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                Un recorrido corto por las entregas que mejor condensan el enfoque,
                las decisiones y el criterio desarrollado en esta materia.
              </p>
            </div>
          </div>
        </Reveal>

        {showcasedProjects.length > 0 ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {showcasedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                revealDelay={index * 0.08}
                theme={subject.color}
              />
            ))}
          </div>
        ) : (
          <Reveal y={18}>
            <div className="mt-12 rounded-lg border subject-functional-zone p-6">
              <p className="text-sm leading-7 text-muted-foreground">
                Los trabajos destacados de esta materia se incorporaran cuando sus
                evidencias academicas esten listas para documentarse.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
