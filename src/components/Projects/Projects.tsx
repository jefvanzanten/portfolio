import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { getRecentProjects } from "../../helper";
import { Link } from "react-router";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import useProjects from "../../hooks/useProjects";

export type Project = {
  id: number;
  name: string;
  description: string;
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
          <Link to={"/projects/frontend"}>
            <div className={styles["project-card"]}>
              <img
                src="/frontend_icon_3.svg"
                alt="Frontend Icon"
                className={styles.icon}
              />
              <div className={styles["project-info-container"]}>
                <div className={styles["project-info"]}>
                  <h2 className={styles.h2}>Frontend</h2>
                  <p className={styles.p}>
                    {frontendProjects.length} projecten
                  </p>
                </div>
                <img src="/open_icon.svg" className={styles["icon-open"]} />
              </div>
            </div>
          </Link>
          <Link to={"/projects/backend"}>
            <div className={styles["project-card"]}>
              <img
                src="/frontend_icon_3.svg"
                alt="Frontend Icon"
                className={styles.icon}
              />
              <div className={styles["project-info-container"]}>
                <div className={styles["project-info"]}>
                  <h2 className={styles.h2}>Backend</h2>
                  <p className={styles.p}>{backendProjects.length} projecten</p>
                </div>
                <img src="/open_icon.svg" className={styles["icon-open"]} />
              </div>
            </div>
          </Link>
          <Link to={"/projects/fullstack"}>
            <div className={styles["project-card"]}>
              <img
                src="/frontend_icon_3.svg"
                alt="Frontend Icon"
                className={styles.icon}
              />
              <div className={styles["project-info-container"]}>
                <div className={styles["project-info"]}>
                  <h2 className={styles.h2}>Fullstack</h2>
                  <p className={styles.p}>
                    {fullStackProjects.length} projecten
                  </p>
                </div>
                <img src="/open_icon.svg" className={styles["icon-open"]} />
              </div>
            </div>
          </Link>
          <Link to={"/projects/mobile"}>
            <div className={styles["project-card"]}>
              <img
                src="/frontend_icon_3.svg"
                alt="Frontend Icon"
                className={styles.icon}
              />
              <div className={styles["project-info-container"]}>
                <div className={styles["project-info"]}>
                  <h2 className={styles.h2}>Mobile</h2>
                  <p className={styles.p}>{mobileProjects.length} projecten</p>
                </div>
                <img src="/open_icon.svg" className={styles["icon-open"]} />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
