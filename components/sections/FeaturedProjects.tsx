import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { getHomeFeaturedProjects, getProjectSubjectMeta } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getHomeFeaturedProjects(6);

  return (
    <section id="trabajos" className="section-padding relative overflow-hidden">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="Trabajos destacados"
          title="Los trabajos que mejor cuentan el semestre."
          description="Una selección de entregas que reflejan distintos enfoques del semestre: estrategia, liderazgo, datos y programación."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const subject = getProjectSubjectMeta(project);

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                revealDelay={index * 0.05}
                theme={subject?.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
