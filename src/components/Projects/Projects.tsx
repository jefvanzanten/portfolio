import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { getRecentProjects } from "../../helper";

export type Project = {
  name: string;
  description: string;
  url: string;
  stack: string[];
  category: "Frontend" | "Backend" | "Mobile" | "Fullstack";
  lastUpdated: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  console.log("Project aantal: ", projects.length);

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

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch("projects.json");
      console.log("Fetching projects from projects.json", data);
      if (data) setProjects(await data.json());
    };

    fetchProjects();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.h1}>Recente Projecten</h1>
        <div className={styles["recent-projects"]}></div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.h1}>Categoriën</h1>
        <div className={styles["project-list"]}>
          <div className={styles["project-card"]}>
            <h2 className={styles.h2}>Frontend</h2>
            <p className={styles.p}>{frontendProjects.length} projecten</p>
          </div>
          <div className={styles["project-card"]}>
            <h2 className={styles.h2}>Backend</h2>
            <p className={styles.p}>{backendProjects.length} projecten</p>
          </div>
          <div className={styles["project-card"]}>
            <h2 className={styles.h2}>Fullstack</h2>
            <p className={styles.p}>{fullStackProjects.length} projecten</p>
          </div>
          <div className={styles["project-card"]}>
            <h2 className={styles.h2}>Mobile</h2>
            <p className={styles.p}>{mobileProjects.length} projecten</p>
          </div>
        </div>
      </section>
    </main>
  );
}
