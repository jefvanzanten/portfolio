import styles from "../Projects/Projects.module.css";
import useProjects from "../../hooks/useProjects";
import { useCallback, useEffect, useState } from "react";
import { Language, Library } from "../../types";
import FilterButton from "../FilterButton/FilterButton";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useSearchParams } from "react-router";
import FilterTagBar from "../FilterTagBar/FilterTagBar";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const { loading, projects } = useProjects();
  console.log(projects);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const getFiltersFromURL = () => {
    const languages =
      (searchParams
        .get("languages")
        ?.split(",")
        .filter(Boolean) as Language[]) || [];
    const libraries =
      (searchParams
        .get("libraries")
        ?.split(",")
        .filter(Boolean) as Library[]) || [];
    return { languages, libraries };
  };

  const { languages: urlLanguages, libraries: urlLibraries } =
    getFiltersFromURL();
  const [selectedLanguages, setSelectedLanguages] =
    useState<Language[]>(urlLanguages);
  const [selectedLibraries, setSelectedLibraries] =
    useState<Library[]>(urlLibraries);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedLanguages.length > 0) {
      params.set("languages", selectedLanguages.join(","));
    }

    if (selectedLibraries.length > 0) {
      params.set("libraries", selectedLibraries.join(","));
    }

    setSearchParams(params, { replace: true });
  }, [selectedLanguages, selectedLibraries, setSearchParams]);

  const getFilteredProjects = () => {
    return projects.filter((project) => {
      if (!project.languages || !project.libraries) {
        return false;
      }

      const languageMatch =
        selectedLanguages.length === 0 ||
        selectedLanguages.every((lang) => project.languages.includes(lang));

      const libraryMatch =
        selectedLibraries.length === 0 ||
        selectedLibraries.every((lib) => project.libraries.includes(lib));

      return languageMatch && libraryMatch;
    });
  };

  const filtered = getFilteredProjects();

  const toggleLanguage = useCallback((language: Language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  }, []);

  const toggleLibrary = useCallback((library: Library) => {
    setSelectedLibraries((prev) =>
      prev.includes(library)
        ? prev.filter((l) => l !== library)
        : [...prev, library]
    );
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className={styles["content-container"]}>
        <section className={styles["filter-container"]}>
          <FilterButton
            isActive={isOpen}
            handleClick={() => setIsOpen(!isOpen)}
          />
          {selectedLanguages.length > 0 || selectedLibraries.length > 0 ? (
            <FilterTagBar
              tags={[...selectedLanguages, ...selectedLibraries]}
              onTagClick={(tag) => {
                if (selectedLanguages.includes(tag as Language)) {
                  toggleLanguage(tag as Language);
                } else {
                  toggleLibrary(tag as Library);
                }
              }}
            />
          ) : null}
        </section>
        {isOpen && (
          <FilterMenu
            closemenu={() => setIsOpen(false)}
            selectedLanguages={selectedLanguages}
            selectedLibraries={selectedLibraries}
            toggleLanguage={toggleLanguage}
            toggleLibrary={toggleLibrary}
          />
        )}
        <section className={styles["project-container"]}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}
