import { useEffect } from "react";
import styles from "./FilterMenu.module.css";
import { Language, Library } from "../../types";

type FilterMenuProps = {
  closemenu: () => void;
  selectedLanguages: Language[];
  selectedLibraries: Library[];
  toggleLanguage: (language: Language) => void;
  toggleLibrary: (library: Library) => void;
};

export default function FilterMenu({
  closemenu,
  selectedLanguages,
  selectedLibraries,
  toggleLanguage,
  toggleLibrary,
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
        <legend className={styles.legend}>Programmeer- & script-talen</legend>
        <div className={styles.item}>
          <input
            onChange={() => toggleLanguage("TypeScript")}
            checked={selectedLanguages.includes("TypeScript")}
            type="checkbox"
            id="typescript"
            name="languages"
          />
          <label htmlFor="typescript">TypeScript</label>
        </div>
        <div className={styles.item}>
          <input
            onChange={() => toggleLanguage("Kotlin")}
            checked={selectedLanguages.includes("Kotlin")}
            type="checkbox"
            id="kotlin"
            name="languages"
          />
          <label htmlFor="kotlin">Kotlin</label>
        </div>
        <div className={styles.item}>
          <input
            onChange={() => toggleLanguage("Java")}
            checked={selectedLanguages.includes("Java")}
            type="checkbox"
            id="java"
            name="languages"
          />
          <label htmlFor="java">Java</label>
        </div>
      </fieldset>

      <fieldset className={styles.libraries}>
        <legend className={styles.legend}>Frameworks & libraries</legend>
        <div className={styles.libraryGroup}>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("React")}
              checked={selectedLibraries.includes("React")}
              type="checkbox"
              id="react"
              name="frameworks"
            />
            <label htmlFor="react">React</label>
          </div>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("TailwindCSS")}
              checked={selectedLibraries.includes("TailwindCSS")}
              type="checkbox"
              id="tailwind"
              name="frameworks"
            />
            <label htmlFor="tailwind">Tailwind CSS</label>
          </div>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("React-Router")}
              checked={selectedLibraries.includes("React-Router")}
              type="checkbox"
              id="react-router"
              name="frameworks"
            />
            <label htmlFor="react-router">React-Router</label>
          </div>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("TanStackQuery")}
              checked={selectedLibraries.includes("TanStackQuery")}
              type="checkbox"
              id="tsq"
              name="frameworks"
            />
            <label htmlFor="tsq">TanStack Query</label>
          </div>
        </div>
        <div className={styles.libraryGroup}>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("Nextjs")}
              checked={selectedLibraries.includes("Nextjs")}
              type="checkbox"
              id="next"
              name="frameworks"
            />
            <label htmlFor="next">Next.js</label>
          </div>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("Express")}
              checked={selectedLibraries.includes("Express")}
              type="checkbox"
              id="express"
              name="frameworks"
            />
            <label htmlFor="express">Express</label>
          </div>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("Drizzle")}
              checked={selectedLibraries.includes("Drizzle")}
              type="checkbox"
              id="drizzle"
              name="frameworks"
            />
            <label htmlFor="drizzle">Drizzle</label>
          </div>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("Better-Auth")}
              checked={selectedLibraries.includes("Better-Auth")}
              type="checkbox"
              id="better-auth"
              name="frameworks"
            />
            <label htmlFor="better-auth">Better-Auth</label>
          </div>
        </div>
        <div className={styles.libraryGroup}>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("React-Native")}
              checked={selectedLibraries.includes("React-Native")}
              type="checkbox"
              id="react-native"
              name="frameworks"
            />
            <label htmlFor="react-native">React-Native</label>
          </div>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("JetpackCompose")}
              checked={selectedLibraries.includes("JetpackCompose")}
              type="checkbox"
              id="jetpack-compose"
              name="frameworks"
            />
            <label htmlFor="jetpack-compose">Jetpack Compose</label>
          </div>
          <div className={styles.item}>
            <input
              onChange={() => toggleLibrary("JavaFX")}
              checked={selectedLibraries.includes("JavaFX")}
              type="checkbox"
              id="javafx"
              name="frameworks"
            />
            <label htmlFor="javafx">JavaFX</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
