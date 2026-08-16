import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import profileData from "../../data/profileData";
import experienceData from "../../data/experienceData";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-page-hero">
        <div className="container">
          <motion.div
            className="about-page-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="page-eyebrow">
              {profileData.about.eyebrow}
            </span>

            <h1>
              More than just
              <span> writing code.</span>
            </h1>

            <p>
              {profileData.about.description}
            </p>
          </motion.div>

          <motion.div
            className="about-page-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>SCROLL TO EXPLORE</span>
            <FiArrowDown />
          </motion.div>
        </div>
      </section>

      <section className="about-introduction section">
        <div className="container">
          <div className="about-introduction-grid">
            <div className="about-section-label">
              <span>01</span>
              <p>WHO I AM</p>
            </div>

            <div className="about-introduction-content">
              <h2>
                {profileData.about.title}
              </h2>

              <p>
                {profileData.about.description}
              </p>

              <p>
                {profileData.about.secondaryDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-services section">
        <div className="container">
          <div className="about-section-heading">
            <div className="about-section-label">
              <span>02</span>
              <p>WHAT I DO</p>
            </div>

            <h2>
              Turning ideas into
              <span> working products.</span>
            </h2>
          </div>

          <div className="about-services-grid">
            {profileData.about.highlights.map(
              (highlight, index) => (
                <motion.article
                  className="about-service-card"
                  key={highlight}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08
                  }}
                >
                  <span className="about-service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{highlight}</h3>

                  <p>
                    {getHighlightDescription(highlight)}
                  </p>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="about-experience section">
        <div className="container">
          <div className="about-section-heading">
            <div className="about-section-label">
              <span>03</span>
              <p>EXPERIENCE</p>
            </div>

            <h2>
              The journey so far.
            </h2>
          </div>

          <div className="about-experience-list">
            {experienceData.experience.map(
              (item, index) => (
                <motion.article
                  className="about-experience-item"
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 25
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  <div className="about-experience-period">
                    {item.period}
                  </div>

                  <div className="about-experience-main">
                    <div>
                      <span>{item.type}</span>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                    </div>

                    <p>{item.description}</p>

                    <div className="about-experience-tech">
                      {item.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="about-education section">
        <div className="container">
          <div className="about-section-heading">
            <div className="about-section-label">
              <span>04</span>
              <p>EDUCATION & CERTIFICATIONS</p>
            </div>

            <h2>
              Building the foundation.
            </h2>
          </div>

          <div className="about-credentials-grid">
            <div className="credentials-column">
              <span className="credentials-heading">
                Education
              </span>

              {experienceData.education.map((item) => (
                <article
                  className="credential-card"
                  key={item.id}
                >
                  <span>{item.period}</span>

                  <h3>{item.qualification}</h3>

                  <h4>{item.institution}</h4>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="credentials-column">
              <span className="credentials-heading">
                Certifications
              </span>

              {experienceData.certifications.map(
                (item) => (
                  <article
                    className="credential-card certification-card"
                    key={item.id}
                  >
                    <span>Certification</span>

                    <h3>{item.title}</h3>

                    <h4>{item.issuer}</h4>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="about-resume section">
        <div className="container">
          <div className="about-resume-card">
            <div>
              <span className="page-eyebrow">
                WANT THE FULL STORY?
              </span>

              <h2>
                Take a closer look at my experience.
              </h2>
            </div>

            <div className="about-resume-actions">
              <a
                href={profileData.resume}
                target="_blank"
                rel="noreferrer"
                className="resume-button"
              >
                Download Resume
                <FiDownload />
              </a>

              <Link
                to="/contact"
                className="resume-contact-link"
              >
                Let's Talk
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function getHighlightDescription(highlight) {
  const descriptions = {
    "Full-Stack Development":
      "Building complete web applications across the frontend, backend, APIs and database layers.",

    "UI/UX Design":
      "Designing interfaces that balance visual quality, usability and a clear user experience.",

    "Responsive Web Applications":
      "Creating interfaces that adapt smoothly across desktop, tablet and mobile devices.",

    "Problem Solving":
      "Breaking complex technical problems into practical solutions and continuously improving the implementation."
  };

  return (
    descriptions[highlight] ||
    "Creating thoughtful digital experiences with a focus on quality and usability."
  );
}

export default About;