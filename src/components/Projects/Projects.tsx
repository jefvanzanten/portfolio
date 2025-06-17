import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { getRecentProjects } from "../../helper";
import { Link } from "react-router";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import useProjects from "../../hooks/useProjects";
import ProjectCategoryCard from "../ProjectCategoryCard/ProjectCategoryCard";

export type Project = {
  id: number;
  name: string;
  description: string;
  slug: string;
  url: string;
  stack: string[];
  category: "Frontend" | "Backend" | "Mobile" | "Fullstack";
  lastUpdated: string;
};

export default function Projects() {
  const { loading, projects } = useProjects();

  const frontendProjects = projects.filter(
    (item) => item.category === "Frontend"
  );
  const backendProjects = projects.filter(
    (item) => item.category === "Backend"
  );
  const mobileProjects = projects.filter((item) => item.category === "Mobile");
  const fullStackProjects = projects.filter(
    (item) => item.category === "Fullstack"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.h1}>Recente Projecten</h1>
        <ProjectCarousel projects={getRecentProjects(projects)} />
      </section>
      <section className={styles.section}>
        <h1 className={styles.h1}>Categoriën</h1>
        <div className={styles["project-list"]}>
          <ProjectCategoryCard projects={frontendProjects} />
          <ProjectCategoryCard projects={backendProjects} />
          <ProjectCategoryCard projects={fullStackProjects} />
          <ProjectCategoryCard projects={mobileProjects} />
        </div>
      </section>
    </main>
  );
}
