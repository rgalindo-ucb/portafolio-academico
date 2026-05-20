"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { subjectIcons, type SubjectIconName } from "@/components/subjects/subject-icons";
import { Badge } from "@/components/ui/badge";
import type { Subject } from "@/types/subject";

type SubjectCardProps = {
  subject: Subject;
  index: number;
  projectCount: number;
  compact?: boolean;
  focusText?: string;
  showFocus?: boolean;
};

export function SubjectCard({
  subject,
  index,
  projectCount,
  compact = false,
  focusText,
  showFocus = false,
}: SubjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = subjectIcons[subject.icon as SubjectIconName] ?? subjectIcons.sparkles;
  const subjectThemeStyle = {
    "--subject-primary": subject.color.primary,
    "--subject-secondary": subject.color.secondary,
    "--subject-accent": subject.color.accent,
    "--subject-background": subject.color.background,
    "--subject-text": subject.color.text,
  } as CSSProperties;
  const isPending = projectCount === 0;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={`/materias/${subject.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background subject-card"
        style={subjectThemeStyle}
      >
        <div
          className={compact ? "relative z-10 min-h-28 p-4" : "relative z-10 min-h-56 p-6"}
          style={{ background: subject.gradient } as CSSProperties}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-sm" style={{ color: subject.color.accent }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border subject-icon-tile">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div
          className={
            compact
              ? "relative z-10 flex flex-1 flex-col p-4"
              : "relative z-10 flex flex-1 flex-col p-5 sm:p-6"
          }
        >
          <div className="flex flex-wrap items-center gap-2">
            {isPending ? (
              <Badge className="subject-badge-accent" variant="secondary">
                Pendiente
              </Badge>
            ) : null}
          </div>
          <h3
            className={
              compact
                ? "font-editorial mt-4 text-2xl font-normal leading-none"
                : "font-editorial mt-5 text-3xl font-normal leading-none"
            }
          >
            {subject.name}
          </h3>
          <p
            className={
              compact
                ? "mt-3 text-sm leading-6 text-muted-foreground"
                : "mt-4 text-sm leading-7 text-muted-foreground"
            }
          >
            {focusText ?? subject.description}
          </p>
          {showFocus && !compact ? (
            <p className="mt-4 text-sm leading-7 text-foreground/76">
              {subject.academicFocus}
            </p>
          ) : null}

          <div
            className={
              compact
                ? "mt-auto flex items-center justify-between gap-4 pt-6 text-sm font-medium subject-action"
                : "mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-medium subject-action"
            }
          >
            <span>{isPending ? "Ver narrativa" : "Explorar materia"}</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
