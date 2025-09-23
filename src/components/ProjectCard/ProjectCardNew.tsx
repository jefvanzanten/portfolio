import styles from "./ProjectCard.module.css";
import { Project } from "../../types";
import GithubLink from "../GithubLink/GithubLink";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles["project-card-container"]}>
      <img className={styles.cover} src={project.coverUrl} />
      <section className={styles["project-info"]}>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
        <div className={styles["tag-container"]}>
          {project.libraries.map((library) => (
            <span className={styles.tag}>{library}</span>
          ))}
        </div>
      </section>
      <GithubLink
        name="Github"
        iconUrl="/icons/github-mark-white.svg"
        url={project.url}
      />
    </article>
  );
}

export default ProjectCard;
