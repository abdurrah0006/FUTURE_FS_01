import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import projectsData from "../../data/projectsData";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projectsData.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <section className="project-details-hero">
        <div className="container">
          <Link to="/projects" className="project-back-link">
            <FiArrowLeft />
            Back to Projects
          </Link>

          <div className="project-details-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>

          <h1>{project.title}</h1>

          <p className="project-details-intro">
            {project.preview.description}
          </p>

          <div className="project-details-links">
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Project
              <FiArrowUpRight />
            </a>

            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <FiGithub />
            </a>
          </div>

          <div className="project-details-cover">
            <img
              src={project.image}
              alt={`${project.title} preview`}
            />
          </div>
        </div>
      </section>

      <section className="project-case-study section">
        <div className="container">
          <div className="project-case-study-grid">
            <aside className="project-case-study-sidebar">
              <span>CASE STUDY</span>
              <h2>{project.title}</h2>
            </aside>

            <div className="project-case-study-content">
              <CaseStudySection
                title="Overview"
                content={project.overview.description}
              />

              <CaseStudySection
                title="The Problem"
                content={project.problem.description}
              />

              <CaseStudySection
                title="The Solution"
                content={project.solution.description}
              />

              <CaseStudySection
                title="Development Process"
                content={project.development.description}
              />

              <section className="case-study-section">
                <span className="case-study-label">
                  KEY FEATURES
                </span>

                <h2>What I built</h2>

                <div className="feature-list">
                  {project.features.map((feature, index) => (
                    <div className="feature-item" key={feature}>
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="case-study-section">
                <span className="case-study-label">
                  TECHNOLOGIES
                </span>

                <h2>Technology Stack</h2>

                <div className="detail-tech-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </section>

              <section className="case-study-section">
                <span className="case-study-label">
                  CHALLENGES
                </span>

                <h2>Challenges I solved</h2>

                <div className="challenge-list">
                  {project.challenges.map((challenge) => (
                    <article
                      className="challenge-card"
                      key={challenge.title}
                    >
                      <h3>{challenge.title}</h3>
                      <p>{challenge.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="case-study-section">
                <span className="case-study-label">
                  WHAT I LEARNED
                </span>

                <h2>Key takeaways</h2>

                <ul className="learning-list">
                  {project.learnings.map((learning) => (
                    <li key={learning}>{learning}</li>
                  ))}
                </ul>
              </section>

              <section className="case-study-section">
                <span className="case-study-label">
                  PROJECT SCREENSHOTS
                </span>

                <h2>Inside the project</h2>

                <div className="project-screenshots">
                  {project.screenshots.map((screenshot) => (
                    <img
                      key={screenshot}
                      src={screenshot}
                      alt={`${project.title} screenshot`}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CaseStudySection({ title, content }) {
  return (
    <section className="case-study-section">
      <span className="case-study-label">
        {title}
      </span>

      <h2>{title}</h2>

      <p>{content}</p>
    </section>
  );
}

export default ProjectDetails;