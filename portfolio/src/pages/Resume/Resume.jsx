import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiMail, FiMapPin} from "react-icons/fi";
import { Link } from "react-router-dom";
import profileData from "../../data/profileData";
import experienceData from "../../data/experienceData";
import projectsData from "../../data/projectsData";
import "./Resume.css";

function Resume() {
  const resume = profileData.resume;

  return (
    <main className="resume-page">
      <section className="resume-hero section">
        <div className="container">
          <motion.div
            className="resume-hero-top"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="resume-eyebrow">
                PROFESSIONAL RESUME
              </span>

              <h1>
                {profileData.name}
                <span>{profileData.shortTitle}</span>
              </h1>

              <p>{profileData.resume.summary}</p>
            </div>

            <a
              href={profileData.resume}
              download
              className="resume-download"
            >
              Download Resume
              <FiArrowDown />
            </a>
          </motion.div>

          <div className="resume-contact-bar">
            <span>
              <FiMapPin />
              {profileData.location}
            </span>

            <span>
              <FiMail />
              {profileData.email}
            </span>

            <span className="resume-availability">
              {profileData.availability}
            </span>
          </div>
        </div>
      </section>

      <section className="resume-section section">
        <div className="container">
          <ResumeSectionHeader
            number="01"
            label="PROFILE"
            title="Professional Summary"
          />

          <div className="resume-summary">
            <p>{profileData.resume.summary}</p>
          </div>
        </div>
      </section>

      <section className="resume-section resume-skills section">
        <div className="container">
          <ResumeSectionHeader
            number="02"
            label="EXPERTISE"
            title="Technical Skills"
          />

          <div className="resume-skills-grid">
            {Object.entries(profileData.resume.skills).map(
              ([category, skills]) => (
                <div
                  className="resume-skill-group"
                  key={category}
                >
                  <h3>{formatCategory(category)}</h3>

                  <div className="resume-skill-list">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="resume-section section">
        <div className="container">
          <ResumeSectionHeader
            number="03"
            label="EXPERIENCE"
            title="Professional Experience"
          />

          <div className="resume-experience-list">
            {experienceData.experience.map(
              (experience) => (
                <article
                  className="resume-experience"
                  key={experience.id}
                >
                  <div className="resume-experience-meta">
                    <span>{experience.period}</span>
                    <small>{experience.location}</small>
                  </div>

                  <div className="resume-experience-content">
                    <span>{experience.type}</span>

                    <h3>{experience.role}</h3>

                    <h4>{experience.company}</h4>

                    <p>{experience.description}</p>

                    <ul>
                      {experience.responsibilities
                        .slice(0, 4)
                        .map((responsibility) => (
                          <li key={responsibility}>
                            {responsibility}
                          </li>
                        ))}
                    </ul>

                    <div className="resume-inline-tech">
                      {experience.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="resume-section resume-projects section">
        <div className="container">
          <ResumeSectionHeader
            number="04"
            label="SELECTED WORK"
            title="Featured Projects"
          />

          <div className="resume-project-list">
            {projectsData
              .filter((project) => project.featured)
              .slice(0, 4)
              .map((project, index) => (
                <Link
                  to={`/projects/${project.id}`}
                  className="resume-project"
                  key={project.id}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>

                  <FiArrowUpRight />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="resume-section section">
        <div className="container">
          <ResumeSectionHeader
            number="05"
            label="EDUCATION"
            title="Education"
          />

          <div className="resume-education-list">
            {experienceData.education.map((education) => (
              <article
                className="resume-education"
                key={education.id}
              >
                <span>{education.period}</span>

                <div>
                  <h3>{education.qualification}</h3>
                  <h4>{education.institution}</h4>
                  <p>{education.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-section resume-certifications section">
        <div className="container">
          <ResumeSectionHeader
            number="06"
            label="CERTIFICATIONS"
            title="Certifications"
          />

          <div className="resume-certification-list">
            {experienceData.certifications.map(
              (certification, index) => (
                <div
                  className="resume-certification"
                  key={certification.id}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{certification.title}</h3>
                    <p>{certification.issuer}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="resume-cta section">
        <div className="container">
          <div className="resume-cta-card">
            <span className="resume-eyebrow">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Looking for a developer
              <span> who can build?</span>
            </h2>

            <div className="resume-cta-actions">
              <Link
                to="/contact"
                className="resume-cta-primary"
              >
                Contact Me
                <FiArrowUpRight />
              </Link>

              <Link
                to="/projects"
                className="resume-cta-secondary"
              >
                Explore Projects
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ResumeSectionHeader({ number, label, title }) {
  return (
    <div className="resume-section-header">
      <div className="resume-section-label">
        <span>{number}</span>
        <p>{label}</p>
      </div>

      <h2>{title}</h2>
    </div>
  );
}

function formatCategory(category) {
  return category
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}

export default Resume;