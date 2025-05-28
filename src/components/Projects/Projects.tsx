import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <main>
      <div className={styles["container"]}>
        <div className={styles["project-list-container"]}>
          <ul className={styles["project-list"]}>
            <li className={styles["active-project"]}>
              Fullstack Todo + Mobile app
            </li>
            <li>Reeksenspel webapp</li>
            <li>School project: OV app Fullstack</li>
            <li>SupplementenManager voor Android</li>
          </ul>
        </div>
        <div className={styles["project-details"]}>
          <p className={styles["project-details-text"]}>Uitleg</p>
        </div>
      </div>
    </main>
  );
}
