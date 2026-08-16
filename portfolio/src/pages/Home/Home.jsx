import Hero from "../../components/sections/Hero/Hero";
import AboutPreview from "../../components/sections/AboutPreview/AboutPreview";
import SkillsPreview from "../../components/sections/SkillsPreview/SkillsPreview";
import ProjectsPreview from "../../components/sections/ProjectsPreview/ProjectsPreview";
import JourneyPreview from "../../components/sections/JourneyPreview/JourneyPreview";
import ContactCTA from "../../components/sections/ContactCTA/ContactCTA";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <JourneyPreview />
      <ContactCTA />
    </div>
  );
}

export default Home;