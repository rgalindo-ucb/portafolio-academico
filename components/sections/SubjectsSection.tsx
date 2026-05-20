import { SectionHeading } from "@/components/sections/SectionHeading";
import { SubjectCard } from "@/components/subjects/SubjectCard";
import { getSubjectsOverview } from "@/lib/subjects";

const subjectFocus: Record<string, string> = {
  "empresa-y-entorno": "Comprender cómo las empresas crean valor, compiten y responden a su contexto.",
  "desarrollo-de-liderazgo": "Autoconocimiento, influencia y toma de decisiones en contextos humanos complejos.",
  "desarrollo-de-la-creatividad": "Pensamiento creativo, innovación y búsqueda de alternativas fuera de lo habitual.",
  "introduccion-a-ciencia-de-datos": "Del dato aislado al hallazgo útil para comprender problemas empresariales.",
  "introduccion-a-la-programacion": "Lógica, código y herramientas digitales para construir soluciones funcionales.",
};

export function SubjectsSection() {
  const subjectsOverview = getSubjectsOverview();

  return (
    <section id="materias" className="section-padding relative overflow-hidden">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="Materias del semestre"
          title="Cinco áreas de aprendizaje, un mismo proceso formativo."
          description="Cada materia representa una dimensión del semestre: estrategia empresarial, liderazgo, creatividad, análisis de datos y pensamiento digital.
"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {subjectsOverview.map((entry, index) => (
            <SubjectCard
              key={entry.subject.id}
              subject={entry.subject}
              index={index}
              projectCount={entry.stats.totalProjects}
              compact
              focusText={subjectFocus[entry.subject.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
