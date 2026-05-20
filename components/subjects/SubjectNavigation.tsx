import { ParallaxBlock } from "@/components/motion/ParallaxBlock";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedSectionHeader } from "@/components/subjects/AnimatedSectionHeader";
import { SubjectCard } from "@/components/subjects/SubjectCard";
import { SubjectVisualBackground } from "@/components/subjects/SubjectVisualBackground";
import { subjects } from "@/data/subjects";
import { getSubjectStats } from "@/lib/subjects";

type SubjectNavigationProps = {
  currentSlug: string;
};

export function SubjectNavigation({ currentSlug }: SubjectNavigationProps) {
  const otherSubjects = subjects.filter((subject) => subject.slug !== currentSlug);
  const currentSubject = subjects.find((subject) => subject.slug === currentSlug);

  return (
    <section className="subject-scroll-section subject-scroll-section--transition section-padding relative overflow-hidden border-t subject-section">
      <ParallaxBlock amount={-3} className="absolute inset-0">
        <SubjectVisualBackground
          variant="transition"
        />
      </ParallaxBlock>
      <div className="container relative z-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSectionHeader
            kicker="Otras materias"
            number="06"
            title="Continua navegando el semestre."
          />
          {currentSubject ? (
            <Reveal y={8} className="hidden flex-1 lg:block">
              <div className="h-px subject-line" />
            </Reveal>
          ) : null}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {otherSubjects.map((subject, index) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              index={index}
              projectCount={getSubjectStats(subject.name).totalProjects}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
