```jsx 
import { motion } from "framer-motion";
import { useState } from "react";
import { FiCode, FiDatabase, FiFigma} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import profileData from "../../../data/profileData";
import "./HeroVisual.css";

const technologyIcons = {
  React: FiCode,
  "Node.js": FiCode,
  MongoDB: FiDatabase,
  Figma: FiFigma
};

const [rotation, setRotation] = useState({ x: 0, y: 0 });

const handleMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  setRotation({
    x: -y * 8,
    y: x * 8
  });
};

const handleMouseLeave = () => {
  setRotation({ x: 0, y: 0 });
};

function HeroVisual() {
  const { heroVisual } = profileData;

  reurn (
    <motion.div
      className="hero-visual-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
          rotateX: rotation.x,
          rotateY: rotation.y
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-visual-glow" />

      <motion.div
        className="hero-visual-card"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="visual-topbar">
          <div className="visual-dots">
            <span />
            <span />
            <span />
          </div>

          <span className="visual-label">{heroVisual.label}</span>

          <Sparkles className="visual-sparkle" />
        </div>

        <div className="visual-content">
          <div className="visual-code">
            {heroVisual.code.map((line, index) => (
              <div key={index} className="code-line">
                <span className="line-number">{String(index + 1).padStart(2, "0")}</span>
                <span>{line}</span>
              </div>
            ))}
          </div>

          <div className="visual-message">
            <span>01</span>
            <h3>{heroVisual.title}</h3>
          </div>
        </div>

        <div className="visual-footer">
          <span>FULL-STACK</span>
          <span>UI / UX</span>
          <span>WEB</span>
        </div>
      </motion.div>

      <div className="floating-tech floating-tech-one">
        {(() => {
          const Icon = technologyIcons[heroVisual.technologies[0]];
          return <Icon />;
        })()}
        <span>{heroVisual.technologies[0]}</span>
      </div>

      <div className="floating-tech floating-tech-two">
        {(() => {
          const Icon = technologyIcons[heroVisual.technologies[1]];
          return <Icon />;
        })()}
        <span>{heroVisual.technologies[1]}</span>
      </div>

      <div className="floating-tech floating-tech-three">
        {(() => {
          const Icon = technologyIcons[heroVisual.technologies[2]];
          return <Icon />;
        })()}
        <span>{heroVisual.technologies[2]}</span>
      </div>

      <div className="floating-tech floating-tech-four">
        {(() => {
          const Icon = technologyIcons[heroVisual.technologies[3]];
          return <Icon />;
        })()}
        <span>{heroVisual.technologies[3]}</span>
      </div>

      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
    </motion.div>
  );
}

export default HeroVisual;

```