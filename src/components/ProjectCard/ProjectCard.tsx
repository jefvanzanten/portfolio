import styles from "./ProjectCard.module.css";
import { Project } from "../../types";
import GithubLink from "../GithubLink/GithubLink";
import ImageViewModal from "./ImageViewModal";
import { useState } from "react";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className={styles["project-card-container"]}>
        <img
          onClick={() => setIsModalOpen(true)}
          className={styles.cover}
          src={project.coverUrl}
        />
        <section className={styles["project-info"]}>
          <h2 className={styles.title}>{project.name}</h2>
          <p className={styles.description}>{project.description}</p>
        </section>
        <div className={styles["tag-container"]}>
          {project.libraries.map((library) => (
            <span className={styles.tag}>{library}</span>
          ))}
          {project.languages.map((language) => (
            <span className={styles.tag}>{language}</span>
          ))}
        </div>
        <GithubLink
          name="Github"
          iconUrl="/icons/github-mark-white.svg"
          url={project.url}
        />
      </article>
      <ImageViewModal
        imageUrl={project.coverUrl}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default ProjectCard;
