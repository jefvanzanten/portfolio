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
            // <Link
            //   to={`/projects/${category}/${project.slug}`}
            //   className={styles.container}
            //   key={project.name}
            // >
            <div className={styles.container}>
              <h2 className={styles.h2}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
              <a
                className={styles["github-container"]}
                href={project.url}
                target="_blank"
              >
                <img
                  className={styles["github-logo"]}
                  src="/github-mark-white.svg"
                />
                Github
              </a>
              {/* <NavButton title="Meer info" /> */}
            </div>
            // </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
