import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { getRecentProjects } from "../../helper";

export type Project = {
  name: string;
  description: string;
  url: string;
  stack: string[];
  lastUpdated: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch("projects.json");
      console.log("Fetching projects from projects.json", data);
      if (data) setProjects(getRecentProjects(await data.json()));
    };

    fetchProjects();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles["container"]}>
        <h1 className={styles.h1}>Recente Projecten</h1>
        <div className={styles["project-list"]}>
          {projects.map((project) => (
            <div className={styles["project-card"]} key={project.name}>
              <h2 className={styles.h2}>{project.name}</h2>
              <p className={styles.p}>
                Laatst gewijzigd:
                <br />
                {project.lastUpdated}
              </p>
            </div>
          ))}
        </div>
        <h1 className={styles.h1}>Categoriën</h1>
        <div className={styles["project-list"]}>
          <div className={styles["project-card"]}>
            <h2 className={styles.h2}>Front-end</h2>
            <p className={styles.p}>3 projecten</p>
          </div>
          <div className={styles["project-card"]}>
            <h2 className={styles.h2}>Back-end</h2>
            <p className={styles.p}>2 projecten</p>
          </div>
          <div className={styles["project-card"]}>
            <h2 className={styles.h2}>Mobile</h2>
            <p className={styles.p}>3 projecten</p>
          </div>
        </div>
      </div>
    </main>
  );
}
