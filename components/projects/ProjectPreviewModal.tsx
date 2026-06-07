"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  FolderOpen,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectDisplayImage } from "@/lib/projects";
import { cn, formatProjectDate } from "@/lib/utils";
import type { Project } from "@/types/project";
import type { SubjectTheme } from "@/types/subject";

type ProjectPreviewModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  theme?: SubjectTheme;
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectPreviewModal({
  project,
  isOpen,
  onClose,
  theme,
}: ProjectPreviewModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const previewImage = getProjectDisplayImage(project);
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
        "--project-preview-image": previewImage
          ? `url("${previewImage}")`
          : undefined,
      } as CSSProperties)
    : ({
        "--project-preview-image": previewImage
          ? `url("${previewImage}")`
          : undefined,
      } as CSSProperties);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.dispatchEvent(
      new CustomEvent("portfolio:modal-scroll-lock", {
        detail: { locked: true },
      }),
    );
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.dispatchEvent(
        new CustomEvent("portfolio:modal-scroll-lock", {
          detail: { locked: false },
        }),
      );
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          aria-labelledby={`project-preview-title-${project.id}`}
          aria-modal="true"
          className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6",
            theme && "subject-modal-theme",
          )}
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="dialog"
          style={themeStyle}
        >
          <motion.button
            aria-label="Cerrar previsualizacion"
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
            onClick={onClose}
            variants={backdropVariants}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            type="button"
          />

          <motion.div
            className={cn(
              "premium-panel relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-hidden rounded-lg sm:max-h-[calc(100dvh-3rem)]",
              theme && "subject-modal-panel",
            )}
            variants={panelVariants}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              ref={closeButtonRef}
              aria-label="Cerrar previsualizacion"
              className={cn(
                "absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-background/70 text-muted-foreground backdrop-blur transition-colors focus-visible:outline-none focus-visible:ring-2",
                theme
                  ? "subject-themed-focus hover:border-[color-mix(in_srgb,var(--subject-accent)_60%,transparent)] hover:text-[var(--subject-accent)]"
                  : "hover:border-primary/50 hover:text-primary focus-visible:ring-ring",
              )}
              onClick={onClose}
              type="button"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div
              className="grid w-full overflow-y-auto overscroll-contain lg:grid-cols-[0.86fr_1.14fr]"
              data-lenis-prevent
              data-lenis-prevent-wheel
            >
              <div
                className={cn(
                  "project-preview-visual relative min-h-64 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_20%,hsl(164_82%_64%/0.32),transparent_17rem),radial-gradient(circle_at_82%_78%,hsl(43_79%_68%/0.25),transparent_15rem),linear-gradient(135deg,hsl(225_31%_7%),hsl(249_25%_14%))] p-6 lg:min-h-full lg:border-b-0 lg:border-r",
                  theme && "subject-modal-visual",
                )}
              >
                <div className="project-preview-visual__image" aria-hidden="true" />
                <div className="project-preview-visual__shade" aria-hidden="true" />
                <div className="project-preview-visual__tone" aria-hidden="true" />

                <div className="relative z-10 flex h-full min-h-64 flex-col justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <Badge
                      className={theme ? "subject-badge-accent" : undefined}
                      variant="secondary"
                    >
                      {project.type}
                    </Badge>
                    <span
                      className={cn(
                        "font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground",
                        theme &&
                          "text-[color-mix(in_srgb,var(--subject-text)_62%,transparent)]",
                      )}
                    >
                      Preview
                    </span>
                  </div>

                  <div>
                    <p
                      className={cn(
                        "font-editorial text-8xl leading-none text-primary/75 sm:text-9xl",
                        theme &&
                          "text-[color-mix(in_srgb,var(--subject-accent)_75%,transparent)]",
                      )}
                    >
                      {project.subject.slice(0, 2).toUpperCase()}
                    </p>
                    <div
                      className={cn(
                        "mt-6 h-px bg-gradient-to-r from-primary via-white/20 to-transparent",
                        theme && "subject-line",
                      )}
                    />
                  </div>
                </div>
              </div>

              <motion.div
                className="p-6 pr-14 sm:p-8 sm:pr-16 lg:p-10 lg:pr-16"
                variants={contentVariants}
                transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
              >
                <motion.div
                  className="flex flex-wrap items-center gap-2"
                  variants={itemVariants}
                >
                  <Badge className={theme ? "subject-badge" : undefined} variant="outline">
                    {project.subject}
                  </Badge>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={project.date}>
                      {formatProjectDate(project.date)}
                    </time>
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <FolderOpen className="h-4 w-4" aria-hidden="true" />
                    {project.type}
                  </span>
                </motion.div>

                <motion.h2
                  id={`project-preview-title-${project.id}`}
                  className="font-editorial mt-7 text-4xl font-normal leading-snug text-foreground sm:text-5xl"
                  variants={itemVariants}
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground"
                  variants={itemVariants}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                  variants={itemVariants}
                >
                  <div
                    className={cn(
                      "rounded-lg border border-white/10 bg-white/[0.035] p-4",
                      theme && "subject-modal-card",
                    )}
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      Contexto breve
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {project.context}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "rounded-lg border border-white/10 bg-white/[0.035] p-4",
                      theme && "subject-modal-card",
                    )}
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      Objetivo
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {project.objective}
                    </p>
                  </div>
                </motion.div>

                <motion.div className="mt-8" variants={itemVariants}>
                  <h3 className="text-sm font-semibold text-foreground">
                    Aprendizajes clave
                  </h3>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
                    {project.keyLearnings.slice(0, 3).map((learning) => (
                      <li key={learning} className="flex gap-3">
                        <span
                          className={cn(
                            "mt-2 h-1.5 w-1.5 rounded-full bg-primary",
                            theme && "bg-[var(--subject-accent)]",
                          )}
                          aria-hidden="true"
                        />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                  variants={itemVariants}
                >
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Herramientas
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge
                          key={tool}
                          className={theme ? "subject-badge-accent" : undefined}
                          variant="secondary"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Tags</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className={theme ? "subject-badge" : undefined}
                          variant="outline"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-9 flex flex-col gap-3 sm:flex-row"
                  variants={itemVariants}
                >
                  <Button
                    asChild
                    className={
                      theme
                        ? "subject-themed-focus !bg-[var(--subject-accent)] !text-[var(--subject-background)] !shadow-[0_18px_42px_color-mix(in_srgb,var(--subject-accent)_18%,transparent)] hover:!bg-[color-mix(in_srgb,var(--subject-accent)_88%,white)]"
                        : undefined
                    }
                  >
                    <Link href={`/proyectos/${project.slug}`}>
                      Ver caso completo
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    className={
                      theme
                        ? "subject-themed-focus !border-[color-mix(in_srgb,var(--subject-primary)_36%,transparent)] hover:!border-[color-mix(in_srgb,var(--subject-accent)_60%,transparent)] hover:!bg-[color-mix(in_srgb,var(--subject-primary)_14%,transparent)] hover:!text-[var(--subject-accent)]"
                        : undefined
                    }
                    type="button"
                    variant="outline"
                    onClick={onClose}
                  >
                    Cerrar
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
