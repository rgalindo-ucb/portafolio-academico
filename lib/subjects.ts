import { projects } from "@/data/projects";
import { subjects } from "@/data/subjects";
import type { Project, ProjectType } from "@/types/project";

export function getSubjectBySlug(slug: string) {
  return subjects.find((subject) => subject.slug === slug);
}

export function getProjectsBySubject(subjectName: string) {
  return projects.filter((project) => project.subject === subjectName);
}

export function getFeaturedProjectsBySubject(subjectName: string) {
  const subjectProjects = getProjectsBySubject(subjectName);
  const featured = subjectProjects.filter((project) => project.featured);

  return featured.length > 0 ? featured : getRelevantProjects(subjectProjects);
}

export function getSubjectStats(subjectName: string) {
  const subjectProjects = getProjectsBySubject(subjectName);
  const featuredCount = getFeaturedProjectsBySubject(subjectName).length;
  const types = Array.from(
    new Set(subjectProjects.map((project) => project.type)),
  ).sort() as ProjectType[];

  return {
    totalProjects: subjectProjects.length,
    featuredProjects: featuredCount,
    types,
  };
}

export function getSubjectsOverview() {
  return subjects.map((subject) => {
    const stats = getSubjectStats(subject.name);

    return {
      subject,
      stats,
      isPending: stats.totalProjects === 0,
    };
  });
}

function getRelevantProjects(projectList: Project[]) {
  return [...projectList]
    .sort((first, second) => second.date.localeCompare(first.date))
    .slice(0, 3);
}
