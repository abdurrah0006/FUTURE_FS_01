const profileData = {
  name: "Your Name",
  firstName: "Your",
  lastName: "Name",
  title: "Full-Stack Web Developer & UI/UX Designer",
  shortTitle: "Full-Stack Developer",
  tagline: "I design and build modern digital experiences.",
  description: "I'm a passionate developer focused on creating responsive, user-friendly and scalable web applications.",
  location: "UAE",
  availability: "Available for opportunities",
  profileImage: "/images/profile.jpg",
  email: "your.email@example.com",
  phone: "+971 XX XXX XXXX",

  resume: {
    file: "/resume/resume.pdf",
    summary:
      "Full-Stack Web Developer and UI/UX Designer focused on building responsive, user-friendly and scalable web applications.",
    skills: {
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS"
      ],

      backend: [
        "Node.js",
        "Express.js",
        "REST APIs"
      ],

      database: [
        "MongoDB",
        "Mongoose",
        "PostgreSQL"
      ],

      design: [
        "UI/UX Design",
        "Figma",
        "Responsive Design"
      ],

      tools: [
        "Git",
        "GitHub",
        "VS Code"
      ]
    }
  },
  
  stats: [
    { value: "10+", label: "Projects Built" },
    { value: "1.5+", label: "Years Experience" },
    { value: "3+", label: "Internships" }
  ],

  heroSkills: ["React", "Node.js", "MongoDB", "UI/UX"],

  about: {
    eyebrow: "About Me",
    title: "Building digital experiences from idea to reality.",
    description: "I'm a Full-Stack Web Developer and UI/UX Designer who enjoys turning ideas into responsive, functional and visually polished digital products.",
    secondaryDescription: "My approach combines thoughtful interface design with practical development, allowing me to work across both the visual and technical sides of a project.",
    highlights: [
      "Full-Stack Development",
      "UI/UX Design",
      "Responsive Web Applications",
      "Problem Solving"
    ]
  },

  heroVisual: {
    label: "BUILD / DESIGN / CREATE",
    title: "Turning ideas into digital experiences.",
    code: [
      "const developer = {",
      "  design: true,",
      "  build: true,",
      "  create: true",
      "};"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Figma"]
  }
};

export default profileData;