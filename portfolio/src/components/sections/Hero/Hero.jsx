import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import profileData from "../../../data/profileData";
import contactData from "../../../data/contactData";
import Button from "../../common/Button/Button";
import HeroScene from "../../3D/HeroScene/HeroScene";
import "./Hero.css";

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail
};

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-availability">
            <span className="availability-dot" />
            {profileData.availability}
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            {profileData.firstName}
            <span> {profileData.lastName}</span>
          </h1>

          <h2 className="hero-title">{profileData.title}</h2>

          <p className="hero-description">{profileData.description}</p>

          <div className="hero-actions">
            <Button to="/projects">
              View My Work
              <FiArrowUpRight />
            </Button>

            <Button to="/contact" variant="secondary">
              Let's Connect
            </Button>
          </div>

          <div className="hero-socials">
            {contactData.socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];

              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  {Icon && <Icon /> }
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroScene/>

        </motion.div>
      </div>

      <div className="container hero-bottom">
        <div className="hero-skills">
          {profileData.heroSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="hero-stats">
          {profileData.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}

export default Hero;