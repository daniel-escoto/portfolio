import { projects } from "../../data/projects";
import { timeline } from "../../data/timeline";
import type { ExperienceSummary, FeaturedProject } from "./types";

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
};

const formatDate = (date?: Date): string => {
  if (!date) {
    return "Present";
  }

  return date.toLocaleDateString("en-US", DATE_FORMAT);
};

export const summarizeTimeline = (): ExperienceSummary[] =>
  timeline.map((event) => {
    const preview = event.description.slice(0, 3);
    const remaining = Math.max(event.description.length - preview.length, 0);

    return {
      title: event.title,
      timeframe: `${formatDate(event.startDate)} - ${formatDate(event.endDate)}`,
      bullets: preview,
      moreCount: remaining,
      url: event.url,
    };
  });

export const curateProjects = (): FeaturedProject[] =>
  projects.slice(0, 4).map((project) => ({
    name: project.name,
    description: project.description,
    url: project.url,
    github: project.github,
    tags: project.tags.slice(0, 6),
  }));

export const collectToolkit = (): string[] => {
  const tags = new Set<string>();

  timeline.forEach((event) => {
    event.tags.forEach((tag) => tags.add(tag));
  });

  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
};
