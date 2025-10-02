import { Link, NavLink } from "react-router";
import styles from "./Home.module.css";
import NavButton from "../NavButton/NavButton";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "../ProjectCard/ProjectCard";

const data = [
  { name: "React", url: "https://react.dev/" },
  { name: "Tailwind/CSS", url: "https://tailwindcss.com/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "Express", url: "https://expressjs.com/" },
  { name: "Drizzle", url: "https://orm.drizzle.team/" },
  { name: "Better-Auth", url: "https://www.better-auth.com/" },
  { name: "SQLite", url: "https://sqlite.org/" },
  { name: "Postgres", url: "https://www.postgresql.org/" },
  { name: "React Native", url: "https://reactnative.dev/" },
  {
    name: "Jetpack Compose (Kotlin)",
    url: "https://developer.android.com/compose",
  },
];

export default function Home() {
  const { loading, projects } = useProjects();

  const filteredProjects = projects.filter((project) => project.highlighted);

  return (
    <main>
      <div className={styles["content-container"]}>
        <section className={styles.introduction}>
          <h1 className={styles.h1}>Full-stack en mobile developer</h1>

          <p className={styles.p}>
            Hey, mijn naam is Jef. Momenteel volg ik de studie Software
            Development (HBO Associate Degree).
            <br />
            <br />
            Ik wissel met programmeren tussen frontend, backend en mobile
            projecten, zodat mijn kennis en vaardigheden op elk vlak blijven
            ontwikkelen.
          </p>
          <div className={styles["button-container"]}>
            <NavButton title="Bekijk projecten" to="/projects" />
            <NavButton title="Neem contact" to="/contact" />
          </div>
        </section>

        <section className={styles["featured-projects-container"]}>
          <div className={styles.title}>
            <span className={styles.line} />
            <h1>Featured Projects</h1>
            <span className={styles.line} />
          </div>

          <div className={styles["featured-projects-list"]}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        {data.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            key={index}
            className={styles["home-tech"]}
          >
            {item.name}
          </a>
        ))}
      </footer>
    </main>
  );
}
