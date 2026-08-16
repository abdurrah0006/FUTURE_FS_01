import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import profileData from "../../../data/profileData";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import "./AboutPreview.css";

function AboutPreview() {
  const { about } = profileData;

  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-preview-grid">
          <motion.div
            className="about-preview-heading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              eyebrow={about.eyebrow}
              title={about.title}
            />

            <Link to="/about" className="about-link">
              Learn More About Me
              <FiArrowUpRight />
            </Link>
          </motion.div>

          <motion.div
            className="about-preview-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="about-main-text">{about.description}</p>

            <p className="about-secondary-text">
              {about.secondaryDescription}
            </p>

            <div className="about-highlights">
              {about.highlights.map((highlight) => (
                <div className="about-highlight" key={highlight}>
                  <span>
                    <FiCheck />
                  </span>
                  {highlight}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;