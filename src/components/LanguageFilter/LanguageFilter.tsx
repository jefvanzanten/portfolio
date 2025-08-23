import { useState } from "react";
import styles from "./LanguageFilter.module.css";
import { Language } from "../../types";

type LanguageFilterProps = {
  handleLanguageChange: (language: Language) => void;
};

export default function LanguageFilter({
  handleLanguageChange,
}: LanguageFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <option
          className={styles.option}
          onClick={() => handleLanguageChange("Alle Talen")}
        >
          Alle Talen
        </option>
        <option
          className={styles.option}
          onClick={() => handleLanguageChange("TypeScript/JavaScript")}
        >
          TypeScript/JavaScript
        </option>
        <option
          className={styles.option}
          onClick={() => handleLanguageChange("Kotlin")}
        >
          Kotlin
        </option>
        <option
          className={styles.option}
          onClick={() => handleLanguageChange("Java")}
        >
          Java
        </option>
      </select>

      <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
        ▼
      </span>
    </div>
  );
}
