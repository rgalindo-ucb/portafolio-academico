"use client";

import { useMemo, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimatedSectionHeader } from "@/components/subjects/AnimatedSectionHeader";
import { SubjectVisualBackground } from "@/components/subjects/SubjectVisualBackground";
import { Input } from "@/components/ui/input";
import type { Project, ProjectType } from "@/types/project";
import type { Subject } from "@/types/subject";

type SubjectArchiveProps = {
  subject: Subject;
  projects: Project[];
};

const allTypesValue = "Todos";

export function SubjectArchive({ subject, projects }: SubjectArchiveProps) {
  const [selectedType, setSelectedType] = useState<ProjectType | typeof allTypesValue>(
    allTypesValue,
  );
  const [query, setQuery] = useState("");
  const hasProjects = projects.length > 0;

  const projectTypes = useMemo(
    () => Array.from(new Set(projects.map((project) => project.type))).sort(),
    [projects],
  ) as ProjectType[];

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesType =
        selectedType === allTypesValue || project.type === selectedType;

      if (!normalizedQuery) {
        return matchesType;
      }

      const searchableText = [
        project.title,
        project.description,
        project.type,
        project.context,
        ...project.tags,
        ...project.tools,
      ]
        .join(" ")
        .toLowerCase();

      return matchesType && searchableText.includes(normalizedQuery);
    });
  }, [projects, query, selectedType]);

  return (
    <section
      className="subject-scroll-section subject-scroll-section--archive section-padding relative overflow-hidden"
      id="archivo-materia"
    >
      <SubjectVisualBackground variant="functionalSolid" />
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <AnimatedSectionHeader
            description={
              hasProjects
                ? "Todos los trabajos desarrollados durante el semestre en esta materia."
                : "Este espacio queda preparado para incorporar las evidencias academicas de la materia."
            }
            kicker="Archivo completo"
            number="03"
            title={`Archivo de ${subject.shortName}.`}
          />

          <Reveal y={18}>
            <div className="grid gap-3 rounded-lg border p-4 subject-functional-zone sm:grid-cols-[1fr_16rem]">
              <label>
                <span className="sr-only">Buscar trabajos de la materia</span>
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por titulo, tag o herramienta"
                  className="subject-select"
                />
              </label>
              <label>
                <span className="sr-only">Filtrar por tipo de entrega</span>
                <select
                  value={selectedType}
                  onChange={(event) =>
                    setSelectedType(event.target.value as ProjectType | typeof allTypesValue)
                  }
                  className="h-11 w-full rounded-md border px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 subject-select"
                >
                  <option value={allTypesValue}>Todos los tipos</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </Reveal>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                revealDelay={(index % 6) * 0.035}
                theme={subject.color}
              />
            ))}
          </div>
        ) : (
          <Reveal y={18}>
            <div className="mt-10 rounded-lg border p-6 subject-functional-zone">
              <h3 className="text-sm font-semibold text-foreground">
                {hasProjects ? "Sin resultados" : "Trabajos pendientes"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {hasProjects
                  ? "No hay trabajos que coincidan con el filtro actual. Prueba con otro tipo de entrega o una busqueda mas amplia."
                  : "Las entregas de esta materia se agregaran cuando esten listas para documentarse dentro del portafolio."}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
