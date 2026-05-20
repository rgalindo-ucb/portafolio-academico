import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Download } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { ProjectCaseStudySection } from "@/components/projects/ProjectCaseStudySection";
import { ProjectEvidenceCard } from "@/components/projects/ProjectEvidenceCard";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectLearningCard } from "@/components/projects/ProjectLearningCard";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { SubjectThemeBridge } from "@/components/subjects/SubjectThemeBridge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import { getProjectDisplayImage, getProjectSubjectMeta } from "@/lib/projects";
import type { ProjectGalleryItem } from "@/types/project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function hasContent(value?: string) {
  return Boolean(value?.trim());
}

function cleanItems(items: string[]) {
  return items.filter((item) => item.trim().length > 0);
}

function getProjectGalleryItems(
  projectTitle: string,
  imageUrl?: string,
  gallery?: ProjectGalleryItem[],
) {
  const visualGallery = gallery?.filter(
    (item) => item.src.trim().length > 0 && item.alt.trim().length > 0,
  );

  if (visualGallery && visualGallery.length > 0) {
    return visualGallery;
  }

  if (!imageUrl?.trim()) {
    return [];
  }

  return [
    {
      src: imageUrl,
      alt: `Imagen principal de ${projectTitle}`,
      caption: "Evidencia visual principal del proyecto.",
    },
  ];
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Trabajo no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const subject = getProjectSubjectMeta(project);

  if (!subject) {
    notFound();
  }

  const { previousProject, nextProject } = getAdjacentProjects(project.slug);
  const keyLearnings = cleanItems(project.keyLearnings);
  const tools = cleanItems(project.tools);
  const tags = cleanItems(project.tags);
  const evidence = project.evidence?.filter(
    (item) => item.label.trim().length > 0 && item.url.trim().length > 0,
  );
  const galleryItems = getProjectGalleryItems(
    project.title,
    project.imageUrl,
    project.gallery,
  );
  const caseSections = [
    {
      kicker: "Punto de partida",
      title: "Contexto",
      text: project.context,
    },
    {
      kicker: "Intencion academica",
      title: "Objetivo",
      text: project.objective,
    },
    {
      kicker: "Ruta de trabajo",
      title: "Proceso",
      text: project.process,
    },
    {
      kicker: "Cierre y evidencia",
      title: "Resultado",
      text: project.result,
    },
  ].filter((section) => hasContent(section.text));
  const subjectThemeStyle = {
    "--subject-primary": subject.color.primary,
    "--subject-secondary": subject.color.secondary,
    "--subject-accent": subject.color.accent,
    "--subject-background": subject.color.background,
    "--subject-text": subject.color.text,
    "--subject-gradient": subject.gradient,
  } as CSSProperties;

  return (
    <article className="project-detail-page subject-theme" style={subjectThemeStyle}>
      <SubjectThemeBridge subject={subject} />
      <ProjectHero
        imageUrl={getProjectDisplayImage(project)}
        nextProject={nextProject}
        previousProject={previousProject}
        project={project}
        subject={subject}
      />

      <main className="container relative z-10 max-w-6xl py-14 sm:py-20">
        {caseSections.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {caseSections.map((section) => (
              <ProjectCaseStudySection
                key={section.title}
                kicker={section.kicker}
                title={section.title}
              >
                <p>{section.text}</p>
              </ProjectCaseStudySection>
            ))}
          </div>
        ) : null}

        {keyLearnings.length > 0 ? (
          <section className="mt-12">
            <Reveal y={18}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--subject-accent)]">
                    Sintesis personal
                  </span>
                  <h2 className="font-editorial mt-3 text-3xl font-normal text-[var(--subject-text)] sm:text-4xl">
                    Aprendizajes clave
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[color-mix(in_srgb,var(--subject-text)_68%,transparent)]">
                  Ideas que quedan como criterio para futuros trabajos de la
                  materia y del portafolio.
                </p>
              </div>
            </Reveal>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {keyLearnings.map((learning, index) => (
                <Reveal key={learning} delay={index * 0.05} y={18}>
                  <ProjectLearningCard learning={learning} index={index} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {project.fileUrl || (evidence && evidence.length > 0) ? (
          <Reveal>
            <section className="project-taxonomy-panel mt-12 rounded-lg border p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--subject-accent)]">
                    Material de soporte
                  </span>
                  <h2 className="font-editorial mt-3 text-3xl font-normal text-[var(--subject-text)] sm:text-4xl">
                    Evidencias del trabajo
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[color-mix(in_srgb,var(--subject-text)_68%,transparent)]">
                    Recursos asociados al proyecto, como entrega final, enlaces
                    externos y archivos complementarios.
                  </p>
                </div>

                {project.fileUrl ? (
                  <Button asChild className="project-primary-button">
                    <Link href={project.fileUrl}>
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      Ver archivo completo
                    </Link>
                  </Button>
                ) : null}
              </div>

              {evidence && evidence.length > 0 ? (
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {evidence.map((item) => (
                    <ProjectEvidenceCard key={`${item.type}-${item.label}`} evidence={item} />
                  ))}
                </div>
              ) : null}
            </section>
          </Reveal>
        ) : null}

        {galleryItems.length > 0 ? (
          <section className="mt-12">
            <Reveal y={18}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--subject-accent)]">
                    Registro visual
                  </span>
                  <h2 className="font-editorial mt-3 text-3xl font-normal text-[var(--subject-text)] sm:text-4xl">
                    Galería de evidencias
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[color-mix(in_srgb,var(--subject-text)_68%,transparent)]">
                  Capturas, referencias o piezas visuales que ayudan a leer el
                  proceso y el resultado del trabajo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.04} y={18}>
              <ProjectGallery items={galleryItems} />
            </Reveal>
          </section>
        ) : null}

        {tools.length > 0 || tags.length > 0 ? (
          <Reveal>
            <section className="project-taxonomy-panel mt-12 rounded-lg border p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--subject-accent)]">
                    Recursos y enfoque
                  </span>
                  <h2 className="font-editorial mt-3 text-3xl font-normal text-[var(--subject-text)] sm:text-4xl">
                    Herramientas y tags
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[color-mix(in_srgb,var(--subject-text)_68%,transparent)]">
                    Una lectura rapida de las herramientas usadas y los temas
                    que conectan este trabajo con la materia.
                  </p>
                </div>

                <div className="grid gap-6">
                  {tools.length > 0 ? (
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--subject-text)]">
                        Herramientas utilizadas
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tools.map((tool) => (
                          <Badge
                            key={tool}
                            className="subject-badge-accent"
                            variant="secondary"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {tags.length > 0 ? (
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--subject-text)]">
                        Tags del trabajo
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} className="subject-badge" variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          </Reveal>
        ) : null}

        <div className="mt-14">
          <ProjectNavigation
            previousProject={previousProject}
            nextProject={nextProject}
            variant="bottom"
          />
        </div>
      </main>
    </article>
  );
}
