import React, { useEffect, useState } from "react";
import { Project } from "../types";

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await fetch("/projects.json");
        if (data.ok) {
          const projectsData = await data.json();
          setProjects(projectsData);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading };
}
