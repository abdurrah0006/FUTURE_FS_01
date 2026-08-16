import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import projectsData from "../../../data/projectsData";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import "./ProjectsPreview.css";

function ProjectsPreview() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section className="projects-preview section">
      <div className="container">
        <div className="projects-preview-header">
          <SectionTitle
            eyebrow="Selected Work"
            title="Things I've designed and built."
            description="A selection of projects that showcase my approach to development, design and problem solving."
          />

          <Link to="/projects" className="projects-view-all">
            View All Projects
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="projects-list">
          {featuredProjects.map((project, index) => (
            <motion.article
              className={`project-card project-card-${index + 1}`}
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-image"
                    onError={(event) => {
                        event.currentTarget.src = "/images/project-placeholder.jpg";
                    }}
                />

                <div className="project-image-overlay" />

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <div className="project-heading">
                  <div>
                    <span className="project-year">{project.year}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <span className="project-role">{project.role}</span>
                </div>

                <p className="project-description">
                  {project.preview.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <Link
                    to={`/projects/${project.id}`}
                    className="project-details-link"
                  >
                    View Project
                    <FiArrowUpRight />
                  </Link>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPreview;
