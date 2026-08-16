const projectsData = [
  {
    id: "civilcard",
    title: "CivilCard",
    category: "Full-Stack Web Application",
    year: "2025",
    role: "Full-Stack Developer",
    image: "/images/projects/civilcard.jpg",

    preview: {
      description: "A digital card e-commerce platform designed to allow users to create, customize and manage digital identity cards."
    },

    overview: {
      title: "Digital identity cards made simple.",
      description: "CivilCard is a full-stack digital card platform focused on making it easier for users to create, customize and manage digital identity cards through a modern web interface."
    },

    problem: {
      title: "The Problem",
      description: "Traditional identity and contact card experiences can be difficult to customize, manage and share digitally. The goal was to create a more flexible digital-first experience."
    },

    solution: {
      title: "The Solution",
      description: "I designed and developed a web application that combines a simple user interface with a backend system for managing digital card data and user interactions."
    },

    development: {
      title: "Development Process",
      description: "The project was developed from the frontend interface through the backend API and database layer, with a focus on responsive design and clean application structure."
    },

    features: [
      "Digital card creation",
      "Card customization",
      "User management",
      "Product management",
      "Backend API integration",
      "Responsive interface"
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],

    challenges: [
      {
        title: "Frontend and Backend Integration",
        description: "Connecting the client-side interface with the backend API while keeping the application structure maintainable."
      },
      {
        title: "Data Management",
        description: "Designing a database structure that could support users and digital card information."
      },
      {
        title: "Responsive Design",
        description: "Making the interface usable across desktop, tablet and mobile screen sizes."
      }
    ],

    learnings: [
      "Improved understanding of full-stack application architecture.",
      "Worked with REST APIs and database integration.",
      "Improved responsive UI development.",
      "Learned how frontend and backend systems communicate."
    ],

    screenshots: [
      "/images/projects/civilcard/home.jpg",
      "/images/projects/civilcard/dashboard.jpg",
      "/images/projects/civilcard/card.jpg"
    ],

    links: {
      live: "#",
      github: "#"
    },

    featured: true
  },

  {
    id: "blogify",
    title: "Blogify",
    category: "MERN Application",
    year: "2025",
    role: "Full-Stack Developer",
    image: "/images/projects/blogify.jpg",

    preview: {
      description: "A modern blogging platform where users can create, manage and explore content through a responsive interface."
    },

    overview: {
      title: "A modern platform for publishing ideas.",
      description: "Blogify is a MERN-stack blogging application designed around content creation, user accounts and a responsive reading experience."
    },

    problem: {
      title: "The Problem",
      description: "Many basic blogging applications focus primarily on content storage without providing a polished user experience for both writers and readers."
    },

    solution: {
      title: "The Solution",
      description: "I created a full-stack blogging platform with authentication, blog management and a visually engaging landing page."
    },

    development: {
      title: "Development Process",
      description: "The application was developed using the MERN stack, separating the frontend interface from the backend API and database layer."
    },

    features: [
      "User authentication",
      "Blog creation",
      "Blog management",
      "Responsive landing page",
      "Interactive carousel",
      "Content management"
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose"
    ],

    challenges: [
      {
        title: "Authentication",
        description: "Implementing secure user authentication and protected application functionality."
      },
      {
        title: "Content Management",
        description: "Creating an intuitive system for creating and managing blog content."
      },
      {
        title: "Frontend State",
        description: "Managing application state and keeping the interface synchronized with backend data."
      }
    ],

    learnings: [
      "Improved understanding of MERN architecture.",
      "Worked with authentication systems.",
      "Learned more about API-driven applications.",
      "Improved React state management."
    ],

    screenshots: [
      "/images/projects/blogify/home.jpg",
      "/images/projects/blogify/blog.jpg",
      "/images/projects/blogify/dashboard.jpg"
    ],

    links: {
      live: "#",
      github: "#"
    },

    featured: true
  },

  {
    id: "petconnect",
    title: "PetConnect",
    category: "Social Media Platform",
    year: "2025",
    role: "Full-Stack Developer",
    image: "/images/projects/petconnect.jpg",

    preview: {
      description: "A social platform designed for pet owners to create profiles, share posts and connect with other pet enthusiasts."
    },

    overview: {
      title: "A social space for pet owners.",
      description: "PetConnect is a full-stack social media platform where pet owners can create profiles, share content and connect with other users."
    },

    problem: {
      title: "The Problem",
      description: "Pet owners need a simple digital space where they can share experiences, discover other pet owners and build a community around their pets."
    },

    solution: {
      title: "The Solution",
      description: "I developed a social platform with user profiles, posts, comments and a follow system designed around community interaction."
    },

    development: {
      title: "Development Process",
      description: "The application was built as a full-stack social platform with a React frontend, Node.js backend and MongoDB database."
    },

    features: [
      "User profiles",
      "Posts",
      "Comments",
      "Follow system",
      "Real-time follow updates",
      "Social interactions"
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose"
    ],

    challenges: [
      {
        title: "Social Relationships",
        description: "Designing the follow system and keeping relationships synchronized between users."
      },
      {
        title: "Dynamic Content",
        description: "Managing user-generated posts and interactions across the application."
      },
      {
        title: "Application State",
        description: "Keeping user interactions and interface state synchronized."
      }
    ],

    learnings: [
      "Improved understanding of social application architecture.",
      "Worked with relationships between database documents.",
      "Improved understanding of dynamic user interactions.",
      "Strengthened full-stack development skills."
    ],

    screenshots: [
      "/images/projects/petconnect/home.jpg",
      "/images/projects/petconnect/profile.jpg",
      "/images/projects/petconnect/posts.jpg"
    ],

    links: {
      live: "#",
      github: "#"
    },

    featured: true
  }
];

export default projectsData;