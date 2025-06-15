import { useParams } from "react-router";
import useProjects from "../../hooks/useProjects";

export default function ProjectPage() {
  const { id } = useParams();
  const { projects, loading } = useProjects();

  if (loading) {
    return <div>Loading...</div>;
  }

  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div>Project niet gevonden</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
}
