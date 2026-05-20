import { featuredProjects, projects } from "@/data/projects";
import { subjects } from "@/data/subjects";
import type { Project, ProjectType } from "@/types/project";

export function getPortfolioStats() {
  const uniqueTypes = Array.from(
    new Set(projects.map((project) => project.type)),
  ).sort() as ProjectType[];
  const uniqueCompetencies = Array.from(
    new Set(subjects.flatMap((subject) => subject.competencies)),
  ).sort();
  const subjectProjectCounts = subjects.map((subject) => ({
    subject,
    totalProjects: projects.filter((project) => project.subject === subject.name).length,
  }));
  const activeSubjects = subjectProjectCounts.filter(
    (entry) => entry.totalProjects > 0,
  ).length;

  return {
    totalProjects: projects.length,
    totalSubjects: subjects.length,
    featuredProjects: featuredProjects.length,
    deliveryTypes: uniqueTypes.length,
    competencies: uniqueCompetencies.length,
    activeSubjects,
    pendingSubjects: subjects.length - activeSubjects,
    uniqueTypes,
  };
}

export function getProjectSubjectMeta(project: Project) {
  return subjects.find((subject) => subject.name === project.subject);
}

export function getProjectPlaceholderImage(project: Project) {
  const subject = getProjectSubjectMeta(project);
  const subjectImages = [
    subject?.visuals.featuredImage,
    subject?.visuals.heroImage,
    subject?.visuals.textureImage,
    subject?.visuals.reflectionImage,
  ].filter((image): image is string => Boolean(image));

  if (subjectImages.length > 0) {
    const index = Math.abs(hashString(project.id)) % subjectImages.length;
    return withPhotoPlaceholderParams(subjectImages[index], index);
  }

  return undefined;
}

export function getProjectDisplayImage(project: Project) {
  return project.imageUrl ?? getProjectPlaceholderImage(project);
}

export function getHomeFeaturedProjects(limit = 6) {
  return [...featuredProjects]
    .sort((first, second) => second.date.localeCompare(first.date))
    .slice(0, limit);
}

export function getProjectTypeBreakdown() {
  const counts = projects.reduce<Record<ProjectType, number>>((accumulator, project) => {
    accumulator[project.type] = (accumulator[project.type] ?? 0) + 1;
    return accumulator;
  }, {} as Record<ProjectType, number>);

  return Object.entries(counts)
    .map(([type, count]) => ({
      type: type as ProjectType,
      count,
    }))
    .sort((first, second) => second.count - first.count);
}

function hashString(value: string) {
  let hash = 0;

  for (const char of value) {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    hash |= 0;
  }

  return hash;
}

function withPhotoPlaceholderParams(url: string, variant: number) {
  if (url.startsWith("/")) {
    return url;
  }

  const normalized = new URL(url);

  normalized.searchParams.set("auto", "format");
  normalized.searchParams.set("fit", "crop");
  normalized.searchParams.set("crop", "entropy");
  normalized.searchParams.set("q", "82");
  normalized.searchParams.set("w", "2200");
  normalized.searchParams.set("h", "1600");
  normalized.searchParams.set("sat", variant % 2 === 0 ? "-8" : "-2");
  normalized.searchParams.set("exp", variant % 3 === 0 ? "4" : "2");

  return normalized.toString();
}
