"use client";

import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search, XCircle } from "lucide-react";

import { projects, projectSubjects, projectTypes } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProjectSubjectMeta } from "@/lib/projects";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/project";

const allSubjectsValue = "Todas";
const allTypesValue = "Todos";
const projectsPerPage = 9;

type ArchivePaginationProps = {
  className?: string;
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
  totalPages: number;
};

function ArchivePagination({
  className,
  currentPage,
  onNext,
  onPrevious,
  totalPages,
}: ArchivePaginationProps) {
  return (
    <nav
      aria-label="Paginacion del archivo"
      className={cn(
        "archive-pagination premium-panel flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
        Anterior
      </Button>
      <span className="text-center text-sm font-medium text-muted-foreground">
        Página {currentPage} de {totalPages}
      </span>
      <Button
        type="button"
        variant="outline"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Siguiente
        <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>
    </nav>
  );
}

export function ProjectArchive() {
  const cardsStartRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(allSubjectsValue);
  const [selectedType, setSelectedType] = useState<ProjectType | typeof allTypesValue>(
    allTypesValue,
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          project.title,
          project.subject,
          project.type,
          project.description,
          project.context,
          project.objective,
          project.process,
          project.result,
          ...project.tags,
          ...project.tools,
          ...project.keyLearnings,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesSubject =
        selectedSubject === allSubjectsValue || project.subject === selectedSubject;

      const matchesType =
        selectedType === allTypesValue || project.type === selectedType;

      return matchesSearch && matchesSubject && matchesType;
    });
  }, [searchTerm, selectedSubject, selectedType]);

  const hasActiveFilters =
    searchTerm.length > 0 ||
    selectedSubject !== allSubjectsValue ||
    selectedType !== allTypesValue;

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;

    return filteredProjects.slice(startIndex, startIndex + projectsPerPage);
  }, [currentPage, filteredProjects]);
  const showPagination = totalPages > 1;

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function handleSubjectChange(value: string) {
    setSelectedSubject(value);
    setCurrentPage(1);
  }

  function handleTypeChange(value: ProjectType | typeof allTypesValue) {
    setSelectedType(value);
    setCurrentPage(1);
  }

  function clearFilters() {
    setSearchTerm("");
    setSelectedSubject(allSubjectsValue);
    setSelectedType(allTypesValue);
    setCurrentPage(1);
  }

  function scrollToCardsStart() {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const cardsStart = cardsStartRef.current;

        if (!cardsStart) {
          return;
        }

        const headerHeight =
          document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        const top =
          cardsStart.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          18;

        window.dispatchEvent(
          new CustomEvent("portfolio:scroll-to", {
            detail: {
              top: Math.max(0, top),
            },
          }),
        );
      });
    });
  }

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(1, page - 1));
    scrollToCardsStart();
  }

  function goToNextPage() {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
    scrollToCardsStart();
  }

  return (
    <section id="archivo" className="home-archive section-padding border-y border-white/10">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            number="06"
            eyebrow="Archivo completo"
            title="Un archivo académico para recorrer el semestre a detalle."
            description="Esta sección reúne todos los trabajos cargados en el portafolio y permite explorarlos por materia, tipo de entrega o palabra clave."
          />
          <p className="text-sm font-medium text-muted-foreground">
            {filteredProjects.length} de {projects.length} trabajos
          </p>
        </div>

        <div className="premium-panel mt-10 grid gap-3 p-4 lg:grid-cols-[1fr_220px_220px_auto]">
          <label className="relative block">
            <span className="sr-only">Buscar trabajos</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={searchTerm}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Buscar por titulo, materia o palabra clave"
              className="pl-9"
            />
          </label>

          <label>
            <span className="sr-only">Filtrar por materia</span>
            <select
              value={selectedSubject}
              onChange={(event) => handleSubjectChange(event.target.value)}
              className="archive-select h-11 w-full rounded-md border px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value={allSubjectsValue}>Todas las materias</option>
              {projectSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Filtrar por tipo</span>
            <select
              value={selectedType}
              onChange={(event) =>
                handleTypeChange(event.target.value as ProjectType | typeof allTypesValue)
              }
              className="archive-select h-11 w-full rounded-md border px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value={allTypesValue}>Todos los tipos</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <Button
            type="button"
            variant="outline"
            onClick={clearFilters}
            disabled={!hasActiveFilters}
          >
            <XCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            Limpiar
          </Button>
        </div>

        {filteredProjects.length > 0 ? (
          <>
            {showPagination ? (
              <ArchivePagination
                className="mt-8"
                currentPage={currentPage}
                onNext={goToNextPage}
                onPrevious={goToPreviousPage}
                totalPages={totalPages}
              />
            ) : null}

            <div
              ref={cardsStartRef}
              className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {paginatedProjects.map((project, index) => {
                const subject = getProjectSubjectMeta(project);
                const displayIndex = (currentPage - 1) * projectsPerPage + index;

                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={displayIndex}
                    theme={subject?.color}
                  />
                );
              })}
            </div>

            {showPagination ? (
              <ArchivePagination
                className="mt-8"
                currentPage={currentPage}
                onNext={goToNextPage}
                onPrevious={goToPreviousPage}
                totalPages={totalPages}
              />
            ) : null}
          </>
        ) : (
          <div className="premium-panel mt-8 p-8 text-center">
            <h3 className="font-editorial text-3xl font-normal">
              No se encontraron trabajos
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Prueba con otra palabra clave o limpia los filtros para volver a
              ver todo el archivo del semestre.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={clearFilters}
              className="mt-6"
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
