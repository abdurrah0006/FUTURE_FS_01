import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import contactData from "../../../data/contactData";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="contact-cta section">
      <div className="container">
        <motion.div
          className="contact-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-cta-content">
            <span className="contact-cta-eyebrow">
              {contactData.eyebrow}
            </span>

            <h2>{contactData.title}</h2>

            <p>{contactData.description}</p>

            <Link to="/contact" className="contact-cta-button">
              Let's Talk
              <FiArrowUpRight />
            </Link>
          </div>

          <div className="contact-cta-side">
            <span>{contactData.availability}</span>

            <a
              href={`mailto:${contactData.email}`}
              className="contact-email"
            >
              {contactData.email}
              <FiArrowUpRight />
            </a>

            <div className="contact-socials">
              {contactData.socialLinks.map((social) => (
                <a
                  href={social.url}
                  key={social.id}
                  target={social.id === "email" ? undefined : "_blank"}
                  rel={social.id === "email" ? undefined : "noreferrer"}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-decoration contact-decoration-one" />
          <div className="contact-decoration contact-decoration-two" />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;