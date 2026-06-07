import { SectionReveal } from "@/components/motion/SectionReveal";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeFinalReflection } from "@/components/sections/HomeFinalReflection";
import { HomeVisualBackground } from "@/components/sections/HomeVisualBackground";
import { ProjectArchive } from "@/components/sections/ProjectArchive";
import { SemesterSummary } from "@/components/sections/SemesterSummary";
import { SubjectsSection } from "@/components/sections/SubjectsSection";

export default function HomePage() {
  return (
    <div className="home-page relative isolate overflow-hidden">
      <HomeVisualBackground />
      <HeroSection />
      <SectionReveal>
        <SemesterSummary />
      </SectionReveal>
      <SectionReveal>
        <SubjectsSection />
      </SectionReveal>
      <SectionReveal>
        <FeaturedProjects />
      </SectionReveal>
      <SectionReveal>
        <ProjectArchive />
      </SectionReveal>
      <SectionReveal>
        <HomeFinalReflection />
      </SectionReveal>
    </div>
  );
}
