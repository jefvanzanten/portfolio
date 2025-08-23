import styles from "../ProjectsCategory/ProjectsCategory.module.css";
import useProjects from "../../hooks/useProjects";
import SocialLink from "../SocialLink/SocialLink";
import { useCallback, useState } from "react";
import { Language, Library } from "../../types";
import FilterButton from "../FilterButton/FilterButton";
import FilterMenu from "../FilterMenu/FilterMenu";

export default function NewProjects() {
  const { loading, projects } = useProjects();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);
  const [selectedLibraries, setSelectedLibraries] = useState<Library[]>([]);

  const getFilteredProjects = () => {
    return projects.filter((project) => {
      const languageMatch =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((lang) => project.languages.includes(lang));

      const libraryMatch =
        selectedLibraries.length === 0 ||
        selectedLibraries.some((lib) => project.libraries.includes(lib));

      return languageMatch && libraryMatch;
    });
  };

  const filtered = getFilteredProjects();

  const addLanguageToFilter = (language: Language): void => {
    setSelectedLanguages((prev) => [...prev, language]);
  };

  const addLibraryToFilter = (library: Library): void => {
    setSelectedLibraries((prev) => [...prev, library]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles["filter-button-container"]}>
          <FilterButton handleClick={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && (
          <FilterMenu
            closemenu={() => setIsOpen(false)}
            setSelectedLanguages={addLanguageToFilter}
            setSelectedLibraries={addLibraryToFilter}
          />
        )}
        <div className={styles["project-category-list"]}>
          {filtered.map((project) => (
            // <Link
            //   to={`/projects/${category}/${project.slug}`}
            //   className={styles.container}
            //   key={project.name}
            // >
            <div className={styles.container}>
              <div className={styles["text-container"]}>
                <h2 className={styles.h2}>{project.name}</h2>
                <p className={styles.description}>{project.description}</p>
              </div>
              <SocialLink
                name="Github"
                iconUrl="/icons/github-mark-white.svg"
                url={project.url}
              />
            </div>
            // </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
