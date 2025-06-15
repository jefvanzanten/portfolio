import { useParams } from "react-router";
import useProjects from "../../hooks/useProjects";

export default function ProjectPage() {
  const { id } = useParams();
  const { projects, loading } = useProjects();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{projects[id].name}</h1>
      <p>{projects[id].description}</p>
    </div>
  );
}
