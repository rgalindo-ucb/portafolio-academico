import type { CSSProperties } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Download,
  FolderOpen,
  Tags,
} from "lucide-react";

import { AnimatedText } from "@/components/motion/AnimatedText";
import { ParallaxBlock } from "@/components/motion/ParallaxBlock";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatProjectDate } from "@/lib/utils";
import type { Project } from "@/types/project";
import type { Subject } from "@/types/subject";

type ProjectHeroProps = {
  imageUrl?: string;
  nextProject?: Project;
  previousProject?: Project;
  project: Project;
  subject: Subject;
};

export function ProjectHero({
  imageUrl,
  nextProject,
  previousProject,
  project,
  subject,
}: ProjectHeroProps) {
  const hasImage = Boolean(imageUrl);
  const visualStyle = {
    "--project-hero-image": imageUrl ? `url("${imageUrl}")` : undefined,
  } as CSSProperties;

  return (
    <header className="project-hero relative overflow-hidden border-b">
      <div className="project-hero__mesh" aria-hidden="true" />
      <div className="project-hero__glow project-hero__glow--primary" aria-hidden="true" />
      <div className="project-hero__glow project-hero__glow--accent" aria-hidden="true" />

      <div className="container relative z-10 py-10 sm:py-14 lg:py-16">
        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
          variant="top"
          backHref={`/materias/${subject.slug}`}
          backLabel="Volver a la materia"
        />

        <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(20rem,0.96fr)] lg:items-end">
          <div>
            <Reveal y={12}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="subject-badge-accent" variant="secondary">
                  {project.subject}
                </Badge>
                <Badge className="subject-badge" variant="outline">
                  {project.type}
                </Badge>
                {project.featured ? (
                  <Badge className="subject-badge-accent">Destacado</Badge>
                ) : null}
              </div>
            </Reveal>

            <AnimatedText
              as="h1"
              text={project.title}
              className="font-editorial mt-7 max-w-5xl text-4xl font-normal leading-none text-[var(--subject-text)] sm:text-6xl lg:text-7xl"
            />

            <Reveal delay={0.14}>
              <p className="mt-7 max-w-3xl text-base leading-8 text-[color-mix(in_srgb,var(--subject-text)_78%,transparent)] sm:text-lg">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 grid gap-3 text-sm text-[color-mix(in_srgb,var(--subject-text)_72%,transparent)] sm:grid-cols-2 lg:max-w-2xl">
                <span className="project-meta-pill">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={project.date}>{formatProjectDate(project.date)}</time>
                </span>
                <span className="project-meta-pill">
                  <FolderOpen className="h-4 w-4" aria-hidden="true" />
                  {subject.shortName}
                </span>
              </div>
            </Reveal>

            {project.tags.length > 0 ? (
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <Badge key={tag} className="subject-badge" variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={0.16} y={34}>
            <aside className="project-visual-shell rounded-lg border p-4 sm:p-5">
              <div
                className={cn(
                  "project-main-visual relative aspect-[4/3] overflow-hidden rounded-md border",
                  hasImage && "project-main-visual--image",
                )}
                style={visualStyle}
              >
                <div className="project-main-visual__image" aria-hidden="true" />
                <div className="project-main-visual__shade" aria-hidden="true" />
                <ParallaxBlock
                  amount={-5}
                  className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--subject-text)_62%,transparent)]">
                      Caso academico
                    </span>
                    <Tags className="h-5 w-5 text-[var(--subject-accent)]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-editorial text-7xl leading-none text-[color-mix(in_srgb,var(--subject-accent)_78%,transparent)] sm:text-8xl">
                      {subject.shortName.slice(0, 2).toUpperCase()}
                    </p>
                    <div className="mt-5 h-px subject-line" />
                    <p className="mt-5 max-w-md text-sm leading-7 text-[color-mix(in_srgb,var(--subject-text)_74%,transparent)]">
                      {hasImage
                        ? "Evidencia visual principal del trabajo documentado."
                        : "Representacion visual generada desde el tema academico de la materia."}
                    </p>
                  </div>
                </ParallaxBlock>
              </div>

              {project.fileUrl ? (
                <Button asChild className="project-primary-button mt-5 w-full">
                  <Link href={project.fileUrl}>
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    Abrir archivo
                  </Link>
                </Button>
              ) : null}
            </aside>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
