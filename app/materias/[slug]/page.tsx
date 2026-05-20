import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { SubjectArchive } from "@/components/subjects/SubjectArchive";
import { SubjectCompetencies } from "@/components/subjects/SubjectCompetencies";
import { SubjectFeaturedProjects } from "@/components/subjects/SubjectFeaturedProjects";
import { SubjectHero } from "@/components/subjects/SubjectHero";
import { SubjectNavigation } from "@/components/subjects/SubjectNavigation";
import { SubjectReflection } from "@/components/subjects/SubjectReflection";
import { SubjectStats } from "@/components/subjects/SubjectStats";
import { SubjectThemeBridge } from "@/components/subjects/SubjectThemeBridge";
import { subjects, universityName } from "@/data/subjects";
import {
  getFeaturedProjectsBySubject,
  getProjectsBySubject,
  getSubjectBySlug,
  getSubjectStats,
} from "@/lib/subjects";

type SubjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return subjects.map((subject) => ({
    slug: subject.slug,
  }));
}

export async function generateMetadata({
  params,
}: SubjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);

  if (!subject) {
    return {
      title: "Materia no encontrada",
    };
  }

  return {
    title: subject.name,
    description: `${subject.description} | ${universityName}`,
    openGraph: {
      title: `${subject.name} | Portafolio Universitario`,
      description: subject.description,
      type: "website",
    },
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);

  if (!subject) {
    notFound();
  }

  const subjectIndex = subjects.findIndex((item) => item.slug === subject.slug);
  const subjectProjects = getProjectsBySubject(subject.name);
  const featuredSubjectProjects = getFeaturedProjectsBySubject(subject.name);
  const stats = getSubjectStats(subject.name);
  const subjectThemeStyle = {
    "--subject-primary": subject.color.primary,
    "--subject-secondary": subject.color.secondary,
    "--subject-accent": subject.color.accent,
    "--subject-background": subject.color.background,
    "--subject-text": subject.color.text,
    "--subject-gradient": subject.gradient,
  } as CSSProperties;

  return (
    <div className="subject-page subject-theme" style={subjectThemeStyle}>
      <SubjectThemeBridge subject={subject} />
      <SubjectHero subject={subject} index={subjectIndex} />
      <SubjectStats subject={subject} stats={stats} />
      <SubjectFeaturedProjects
        subject={subject}
        featuredProjects={featuredSubjectProjects}
      />
      <SubjectArchive subject={subject} projects={subjectProjects} />
      <SubjectCompetencies subject={subject} />
      <SubjectReflection subject={subject} />
      <SubjectNavigation currentSlug={subject.slug} />
    </div>
  );
}
