import { BookOpenCheck, FolderTree, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const portfolioNotes = [
  {
    title: "Organización por materias",
    description:
      "Cada asignatura tiene su propio espacio para mostrar trabajos, aprendizajes y reflexiones de manera ordenada.",
    icon: FolderTree,
  },
  {
    title: "Trabajos aplicados",
    description:
      "El archivo reúne proyectos, análisis, prácticas y presentaciones que reflejan el avance del semestre.",
    icon: BookOpenCheck,
  },
  {
    title: "Aprendizaje integrado",
    description:
      "Las materias se conectan entre sí para fortalecer criterio empresarial, liderazgo, análisis de datos, pensamiento digital, innovación y pensar fuera del molde .",
    icon: Sparkles,
  },
];

export function SemesterSummary() {
  return (
    <section id="sobre-portafolio" className="section-padding relative overflow-hidden">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="Sobre este portafolio"
          title="Una mirada organizada al aprendizaje construido durante el semestre."
          description="Este portafolio organiza los trabajos desarrollados durante el semestre como evidencias de aprendizaje. Cada sección conecta materias, proyectos y competencias para mostrar no solo qué se entregó, sino también qué se fue construyendo en el proceso."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {portfolioNotes.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="home-about-card">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-editorial mt-7 text-3xl leading-none text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
