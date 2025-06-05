import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Recente Projecten</h1>
      <div className={styles["project-list"]}>
        <div className={styles["project-card"]}>
          <h2 className={styles.h2}>Project 1</h2>
          <p className={styles.p}>Beschrijving van project 1.</p>
        </div>
        <div className={styles["project-card"]}>
          <h2 className={styles.h2}>Project 2</h2>
          <p className={styles.p}>Beschrijving van project 2.</p>
        </div>
        <div className={styles["project-card"]}>
          <h2 className={styles.h2}>Project 3</h2>
          <p className={styles.p}>Beschrijving van project 3.</p>
        </div>
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
    </main>
  );
}
