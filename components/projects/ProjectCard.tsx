"use client";

import { useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { ArrowUpRight, CalendarDays, Eye } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { ProjectPreviewModal } from "@/components/projects/ProjectPreviewModal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, formatProjectDate } from "@/lib/utils";
import type { Project } from "@/types/project";
import type { SubjectTheme } from "@/types/subject";

type ProjectCardProps = {
  project: Project;
  index?: number;
  theme?: SubjectTheme;
  revealDelay?: number;
};

export function ProjectCard({
  project,
  index,
  theme,
  revealDelay = 0,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const themeStyle = theme
    ? ({
        "--card-primary": theme.primary,
        "--card-secondary": theme.secondary,
        "--card-accent": theme.accent,
        "--card-background": theme.background,
        "--card-text": theme.text,
        "--subject-primary": theme.primary,
        "--subject-secondary": theme.secondary,
        "--subject-accent": theme.accent,
        "--subject-background": theme.background,
        "--subject-text": theme.text,
      } as CSSProperties)
    : undefined;

  function openPreview() {
    setIsPreviewOpen(true);
  }

  function handleCardKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.currentTarget !== event.target) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPreview();
    }
  }

  return (
    <>
      <motion.article
        aria-label={`Abrir previsualizacion de ${project.title}`}
        className={cn(
          "h-full cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          theme ? "project-card--themed subject-themed-focus" : "focus-visible:ring-ring",
        )}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
        onClick={openPreview}
        onKeyDown={handleCardKeyDown}
        role="button"
        style={themeStyle}
        tabIndex={0}
        transition={{
          duration: 0.65,
          delay: revealDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.22, margin: "-8% 0px" }}
        whileHover={prefersReducedMotion ? undefined : { y: -6 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      >
        <Card
          className={cn(
            "group relative flex h-full overflow-hidden border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] transition-all duration-300",
            theme
              ? "subject-project-card"
              : "hover:border-primary/40 hover:shadow-primary/10",
          )}
        >
          <motion.div
            className={cn(
              "absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100",
              theme
                ? "subject-project-card-glow"
                : "bg-gradient-to-r from-primary/0 via-primary/80 to-accent/0",
            )}
            aria-hidden="true"
          />
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  className={theme ? "subject-badge-accent" : undefined}
                  variant="secondary"
                >
                  {project.subject}
                </Badge>
                <Badge className={theme ? "subject-badge" : undefined} variant="outline">
                  {project.type}
                </Badge>
              </div>
              {typeof index === "number" ? (
                <span
                  className={cn(
                    "font-mono text-sm text-primary/80",
                    theme && "text-[var(--card-accent)]",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
            </div>
            <CardTitle className="font-editorial pt-6 text-2xl font-normal leading-tight">
              {project.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              <time dateTime={project.date}>{formatProjectDate(project.date)}</time>
            </div>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col">
            <p className="text-sm leading-7 text-muted-foreground">
              {project.description}
            </p>
            <motion.div
              className="mt-5 flex flex-wrap gap-2"
              initial={false}
              whileHover={prefersReducedMotion ? undefined : "hover"}
            >
              {project.tags.slice(0, 4).map((tag) => (
                <motion.span
                  key={tag}
                  transition={{ duration: 0.25 }}
                  variants={{ hover: { y: -2 } }}
                >
                  <Badge className={theme ? "subject-badge" : undefined} variant="outline">
                    {tag}
                  </Badge>
                </motion.span>
              ))}
            </motion.div>
            <div
              className={cn(
                "mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-medium text-primary",
                theme && "subject-action",
              )}
            >
              <span className="inline-flex items-center gap-2">
                <Eye className="h-4 w-4" aria-hidden="true" />
                Ver preview
              </span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </div>
          </CardContent>
        </Card>
      </motion.article>

      <ProjectPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        project={project}
        theme={theme}
      />
    </>
  );
}
