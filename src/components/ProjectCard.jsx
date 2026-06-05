export default function ProjectCard({ project }) {
  return (
    <article className={`project-card surface-panel ${project.accentClass}`}>
      <div className="project-top">
        <div className="project-meta">
          <span className="project-badge">{project.badge}</span>
          {project.isLatest ? <span className="project-latest">Terbaru</span> : null}
        </div>
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            {project.ctaLabel ?? "Repo"}
          </a>
        ) : (
          <span className="project-link-disabled" aria-label="Repository private">
            {project.ctaLabel ?? "Private Repo"}
          </span>
        )}
      </div>
    </article>
  );
}
