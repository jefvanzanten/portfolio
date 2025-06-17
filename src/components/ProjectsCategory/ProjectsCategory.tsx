import { Link, useParams } from "react-router";
import useProjects from "../../hooks/useProjects";
import styles from "./ProjectsCategory.module.css";
import { capitalizeFirstLetter } from "../../helper";
import NavButton from "../NavButton/NavButton";

export default function ProjectCategory() {
  const { category } = useParams();
  const { projects, loading } = useProjects();
  const filtered = projects.filter(
    (p) => p.category.toLowerCase() === category
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.h1}>{capitalizeFirstLetter(category ?? "")}</h1>
        <div className={styles["project-category-list"]}>
          {filtered.map((project) => (
            <Link
              to={`/projects/${category}/${project.id as number}`}
              className={styles.container}
              key={project.name}
            >
              <h2 className={styles.h2}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
              <NavButton title="Meer info" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
