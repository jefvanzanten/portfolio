import { useEffect } from "react";
import styles from "./FilterMenu.module.css";
import { Language, Library } from "../../types";

type FilterMenuProps = {
  closemenu: () => void;
  setSelectedLanguages: (languages: Language) => void;
  setSelectedLibraries: (libraries: Library) => void;
};

export default function FilterMenu({
  closemenu,
  setSelectedLanguages,
  setSelectedLibraries,
}: FilterMenuProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closemenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closemenu]);

  return (
    <div className={styles.container}>
      <fieldset className={styles.fieldset}>
        <legend> Programmeer- & script-talen</legend>
        <div className={styles.item}>
          <input
            onChange={(e) => setSelectedLanguages("TypeScript/JavaScript")}
            type="checkbox"
            id="typescript"
            name="languages"
          />
          <label htmlFor="typescript">TypeScript/JavaScript</label>
        </div>
        <div className={styles.item}>
          <input type="checkbox" id="kotlin" name="languages" />
          <label htmlFor="kotlin">Kotlin</label>
        </div>
        <div className={styles.item}>
          <input type="checkbox" id="java" name="languages" />
          <label htmlFor="java">Java</label>
        </div>
      </fieldset>
      <div className={styles.libraries}>
        <fieldset className={styles.fieldset}>
          <legend> Frameworks & libraries</legend>
          <div className={styles.groupLeft}>
            <div className={styles.item}>
              <input type="checkbox" id="react" name="frameworks" />
              <label htmlFor="react">React</label>
            </div>
            <div className={styles.item}>
              <input type="checkbox" id="tailwind" name="frameworks" />
              <label htmlFor="tailwind">Tailwind CSS</label>
            </div>
            <div className={styles.item}>
              <input type="checkbox" id="react-router" name="frameworks" />
              <label htmlFor="react-router">React-Router</label>
            </div>
            <div className={styles.item}>
              <input type="checkbox" id="tsq" name="frameworks" />
              <label htmlFor="tsq">TanStack Query/React Query</label>
            </div>
          </div>
          <div className={styles.groupRight}>
            <div className={styles.item}>
              <input type="checkbox" id="next" name="frameworks" />
              <label htmlFor="next">Next.js</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
