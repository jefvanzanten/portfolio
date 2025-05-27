import "./Projects.css";

export default function Projects() {
  return (
    <main>
      <div className="projects-container">
        <div className="project-list-container">
          <ul className="project-list">
            <li className="active-project">Full Stack Todo</li>
            <li>Reeksenspel webapp</li>
            <li>School project: OV app Full Stack</li>
            <li>SupplementenManager voor Android</li>
          </ul>
        </div>
        <div className="project-details">
          <p className="project-details-text">Uitleg</p>
        </div>
      </div>
    </main>
  );
}
