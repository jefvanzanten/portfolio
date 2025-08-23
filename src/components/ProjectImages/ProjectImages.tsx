import React from "react";
import styles from "./ProjectImages.module.css";
import { Project } from "../../types";

const ProjectImages = ({ currentProject }: { currentProject: Project }) => {
  return (
    <div className={styles["content-images"]}>
      {currentProject.images?.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`${currentProject.name} screenshot ${index + 1}`}
          className={styles.screenshot}
        />
      ))}
    </div>
  );
};

export default ProjectImages;
