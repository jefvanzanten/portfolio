import { Project } from "./components/Projects/Projects";

export function getRecentProjects(projects: Project[]) {
  const recentProjects = projects.sort((a, b) => {
    const dateA = new Date(a.lastUpdated);
    const dateB = new Date(b.lastUpdated);
    return dateB.getTime() - dateA.getTime();
  });

  return recentProjects.slice(0, 3);
}
