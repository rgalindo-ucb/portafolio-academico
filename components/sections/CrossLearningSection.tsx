import type { CSSProperties } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { subjects } from "@/data/subjects";
import type { Subject } from "@/types/subject";

const crossLearnThemes = [
  {
    title: "Pensamiento estratégico",
    description:
      "Lectura del contexto, comprensión del negocio y conexión entre decisiones, objetivos e impacto.",
    relatedSlugs: ["empresa-y-entorno", "introduccion-a-ciencia-de-datos"],
  },
  {
    title: "Liderazgo adaptativo",
    description:
      "Comprensión de personas, autoridad, conflicto, aprendizaje en contextos de cambio y autoconocimiento.",
    relatedSlugs: ["desarrollo-de-liderazgo"],
  },
  {
    title: "Pensamiento analítico",
    description:
      "Interpretación de datos, patrones y evidencias para tomar decisiones mejor fundamentadas.",
    relatedSlugs: ["introduccion-a-ciencia-de-datos", "empresa-y-entorno"],
  },
  {
    title: "Logica computacional",
    description:
      "Descomposición de problemas y construcción estructurada de soluciones mediante código.",
    relatedSlugs: ["introduccion-a-la-programacion"],
  },
  {
    title: "Creatividad aplicada",
    description:
      "Búsqueda de alternativas, generación de ideas y apertura a soluciones distintas a lo evidente.",
    relatedSlugs: ["desarrollo-de-la-creatividad", "desarrollo-de-liderazgo"],
  },
  {
    title: "Comunicación académica",
    description:
      "Capacidad de sintetizar información, argumentar ideas y presentar hallazgos con claridad.",
    relatedSlugs: ["empresa-y-entorno", "desarrollo-de-liderazgo", "introduccion-a-ciencia-de-datos"],
  },
  {
    title: "Trabajo colaborativo",
    description:
      "Articulación de roles, escucha activa y ejecución compartida en proyectos grupales.",
    relatedSlugs: ["empresa-y-entorno", "desarrollo-de-liderazgo", "introduccion-a-la-programacion"],
  },
  {
    title: "Resolución de problemas",
    description:
      "Integración de análisis, creatividad y ejecución para responder a desafíos concretos.  ",
    relatedSlugs: ["desarrollo-de-la-creatividad", "introduccion-a-la-programacion", "introduccion-a-ciencia-de-datos"],
  },
];

export function CrossLearningSection() {
  return (
    <section id="aprendizajes" className="section-padding relative overflow-hidden">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="Aprendizajes transversales"
          title="Habilidades que cruzan materias y construyen criterio."
          description="El semestre permitió desarrollar capacidades que se repiten en distintos trabajos: analizar contextos, tomar decisiones, comunicar ideas y construir soluciones. Estas habilidades transversales se potencian al cruzar enfoques y materias, y son las que mejor reflejan el proceso de aprendizaje vivido."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {crossLearnThemes.map((theme, index) => {
            const relatedSubjects = theme.relatedSlugs
              .map((slug) => subjects.find((subject) => subject.slug === slug))
              .filter((subject): subject is Subject => Boolean(subject));
            const firstSubject = relatedSubjects[0] ?? subjects[0];

            return (
              <Reveal key={theme.title} delay={index * 0.05}>
                <article
                  className="home-cross-card"
                  style={
                    {
                      "--home-cross-primary": firstSubject.color.primary,
                      "--home-cross-accent": firstSubject.color.accent,
                    } as CSSProperties
                  }
                >
                  <span className="font-mono text-xs text-[var(--home-cross-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-editorial mt-5 text-3xl leading-none text-foreground">
                    {theme.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {theme.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {relatedSubjects.map((subject) => (
                      <Badge
                        key={subject.id}
                        variant="outline"
                        className="border-white/10 bg-white/5 text-foreground/80"
                      >
                        {subject.shortName}
                      </Badge>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
