import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import skillsData from "../../../data/skillsData";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import "./SkillsPreview.css";

function SkillsPreview() {
  return (
    <section className="skills-preview section">
      <div className="container">
        <div className="skills-preview-header">
          <SectionTitle
            eyebrow="Skills & Technologies"
            title="Tools I use to turn ideas into products."
            description="A combination of development, design and problem-solving skills across the modern web stack."
          />

          <Link to="/about" className="skills-view-link">
            View All Skills
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="skills-grid">
          {skillsData.categories.map((category, index) => (
            <motion.article
              className="skill-card"
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="skill-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPreview;