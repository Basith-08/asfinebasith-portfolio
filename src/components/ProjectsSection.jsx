import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function ProjectsSection() {
  const sortedProjects = [...projects].sort(
    (left, right) => Number(Boolean(right.isLatest)) - Number(Boolean(left.isLatest)),
  );

  return (
    <section className="section-shell" id="projects">
      <SectionHeading
        eyebrow="Proyek Unggulan"
        title="Proyek yang paling kuat untuk menunjukkan cara saya merancang, membangun, dan merapikan produk."
        description="Saya memilih karya yang paling relevan dengan pengalaman fullstack, dashboard multi-role, RBAC, design system, dan aplikasi operasional."
        action={
          <a
            className="inline-link"
            href="https://github.com/Basith-08?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Jelajahi semua repo <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
          </a>
        }
      />

      <div className="projects-grid">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
