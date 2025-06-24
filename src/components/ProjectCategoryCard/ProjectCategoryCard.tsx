import styles from "./ProjectCategoryCard.module.css";
import { Link } from "react-router";
import { Project } from "../Projects/Projects";

type ProjectCategoryCardProps = {
  projects: Project[];
};

export default function ProjectCategoryCard({
  projects,
}: ProjectCategoryCardProps) {
  return (
    <Link to={`/projects/${projects[0].category.toLowerCase()}`}>
      <div className={styles["project-category-card"]}>
        <img
          src="/icons/frontend_icon_3.svg"
          alt="Frontend Icon"
          className={styles["category-icon"]}
        />
        <div className={styles["project-info-container"]}>
          <div className={styles["project-info"]}>
            <h2 className={styles.h2}>{projects[0].category}</h2>
            <p className={styles.p}>{projects.length} projecten</p>
          </div>
          <img src="/icons/open_icon.svg" className={styles["next-icon"]} />
        </div>
      </div>
    </Link>
  );
}
