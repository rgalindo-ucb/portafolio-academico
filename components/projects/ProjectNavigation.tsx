import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectNavigationProps = {
  previousProject?: Project;
  nextProject?: Project;
  variant?: "top" | "bottom";
  backHref?: string;
  backLabel?: string;
};

export function ProjectNavigation({
  previousProject,
  nextProject,
  variant = "bottom",
  backHref = "/#archivo",
  backLabel = "Volver al archivo",
}: ProjectNavigationProps) {
  if (variant === "top") {
    return (
      <nav
        aria-label="Navegacion rapida entre trabajos"
        className="project-navigation project-navigation--top grid gap-3 sm:grid-cols-3"
      >
        <ProjectNavigationLink
          ariaLabel={
            previousProject
              ? `Ir al trabajo anterior: ${previousProject.title}`
              : undefined
          }
          href={previousProject ? `/proyectos/${previousProject.slug}` : undefined}
          icon={<ArrowLeft className="h-4 w-4" aria-hidden="true" />}
          label="Trabajo anterior"
        />
        <Link
          aria-label={backLabel}
          className="project-nav-button inline-flex min-h-11 items-center justify-center rounded-md border px-4 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={backHref}
        >
          <LayoutGrid className="mr-2 h-4 w-4" aria-hidden="true" />
          {backLabel}
        </Link>
        <ProjectNavigationLink
          align="end"
          ariaLabel={
            nextProject ? `Ir al trabajo siguiente: ${nextProject.title}` : undefined
          }
          href={nextProject ? `/proyectos/${nextProject.slug}` : undefined}
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          iconPosition="end"
          label="Siguiente trabajo"
        />
      </nav>
    );
  }

  return (
    <nav
      aria-label="Navegacion entre trabajos"
      className="project-navigation project-navigation--bottom grid gap-4 border-t pt-8 md:grid-cols-2"
    >
      {previousProject ? (
        <Link
          aria-label={`Ir al trabajo anterior: ${previousProject.title}`}
          href={`/proyectos/${previousProject.slug}`}
          className="project-next-card premium-panel p-5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="flex items-center text-sm font-medium text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Proyecto anterior
          </span>
          <strong className="mt-2 block text-foreground">
            {previousProject.title}
          </strong>
          <span className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span>{previousProject.subject}</span>
            <span aria-hidden="true">/</span>
            <span>{previousProject.type}</span>
          </span>
        </Link>
      ) : (
        <div className="hidden md:block" />
      )}

      {nextProject ? (
        <Link
          aria-label={`Ir al trabajo siguiente: ${nextProject.title}`}
          href={`/proyectos/${nextProject.slug}`}
          className="project-next-card premium-panel p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-right"
        >
          <span className="flex items-center text-sm font-medium text-muted-foreground md:justify-end">
            Proyecto siguiente
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </span>
          <strong className="mt-2 block text-foreground">{nextProject.title}</strong>
          <span className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground md:justify-end">
            <span>{nextProject.subject}</span>
            <span aria-hidden="true">/</span>
            <span>{nextProject.type}</span>
          </span>
        </Link>
      ) : (
        <div className="hidden md:block" />
      )}
    </nav>
  );
}

function ProjectNavigationLink({
  href,
  label,
  icon,
  iconPosition = "start",
  align = "start",
  ariaLabel,
}: {
  href?: string;
  label: string;
  icon: ReactNode;
  iconPosition?: "start" | "end";
  align?: "start" | "end";
  ariaLabel?: string;
}) {
  if (!href) {
    return (
      <span
        aria-hidden="true"
        className="hidden min-h-11 rounded-md border border-white/5 bg-white/[0.015] sm:block"
      />
    );
  }

  return (
    <Link
      aria-label={ariaLabel}
      className={cn(
        "project-nav-button inline-flex min-h-11 items-center rounded-md border px-4 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        align === "end" ? "justify-center sm:justify-end" : "justify-center sm:justify-start",
      )}
      href={href}
    >
      {iconPosition === "start" ? <span className="mr-2">{icon}</span> : null}
      {label}
      {iconPosition === "end" ? <span className="ml-2">{icon}</span> : null}
    </Link>
  );
}
