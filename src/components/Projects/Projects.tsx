import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { getRecentProjects } from "../../helper";
import { Link } from "react-router";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";

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
  const [loading, setLoading] = useState(true);

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
      try {
        const data = await fetch("projects.json");
        if (data.ok) {
          const projectsData = await data.json();
          setProjects(projectsData);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.h1}>Recente Projecten</h1>
        {/* <div className={styles["recent-projects"]}></div> */}
        <ProjectCarousel projects={getRecentProjects(projects)} />
      </section>
      <section className={styles.section}>
        <h1 className={styles.h1}>Categoriën</h1>
        <div className={styles["project-list"]}>
          <Link to={"/projects/frontend"}>
            <div className={styles["project-card"]}>
              <h2 className={styles.h2}>Frontend</h2>
              <p className={styles.p}>{frontendProjects.length} projecten</p>
            </div>
          </Link>
          <Link to={"/projects/backend"}>
            <div className={styles["project-card"]}>
              <h2 className={styles.h2}>Backend</h2>
              <p className={styles.p}>{backendProjects.length} projecten</p>
            </div>
          </Link>
          <Link to={"/projects/fullstack"}>
            <div className={styles["project-card"]}>
              <h2 className={styles.h2}>Fullstack</h2>
              <p className={styles.p}>{fullStackProjects.length} projecten</p>
            </div>
          </Link>
          <Link to={"/projects/mobile"}>
            <div className={styles["project-card"]}>
              <h2 className={styles.h2}>Mobile</h2>
              <p className={styles.p}>{mobileProjects.length} projecten</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
