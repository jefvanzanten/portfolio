import { Project } from "./types";

export function getRecentProjects(projects: Project[]) {
  const recentProjects = projects.sort((a, b) => {
    const dateA = new Date(a.lastUpdated);
    const dateB = new Date(b.lastUpdated);
    return dateB.getTime() - dateA.getTime();
  });

  const result = recentProjects.slice(0, 4);
  // console.log("Recent projects:", result);
  return result;
}

export function capitalizeFirstLetter(input: string): string {
  if (input.length === 0) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
}
