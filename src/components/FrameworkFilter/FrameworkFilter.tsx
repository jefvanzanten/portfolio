import { useState } from "react";
import styles from "./FrameworkFilter.module.css";

export default function FrameworkFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <option className={styles.option}>Frameworks & Libraries</option>
        <optgroup label="TypeScript/JavaScript">
          <option className={styles.option}>React</option>
          <option className={styles.option}>NextJS</option>
          <option className={styles.option}>Express</option>
          <option className={styles.option}>Better-Auth</option>
          <option className={styles.option}>Drizzle</option>
        </optgroup>
        <optgroup label="Kotlin">
          <option className={styles.option}>Jetpack Compose</option>
        </optgroup>
        <optgroup label="Java">
          <option className={styles.option}>JavaFX</option>
        </optgroup>
      </select>

      <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
        ▼
      </span>
    </div>
  );
}
