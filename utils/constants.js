import { Code, Storage, Layers } from "@mui/icons-material";

export const PROFILE = {
  name: "Korepilla Abhishek",
  role: "MERN Stack Developer",
  summary:
    "I build scalable, responsive web applications using the MERN stack. Passionate about clean code, performance optimization, and creating intuitive user experiences.",
  linkedin: "https://www.linkedin.com/in/korepilla-abhishek",
  github: "https://github.com/Abhi420hck",
  email: "mailto:abhishekkoripella@gmail.com",
  resume: "/resume.pdf",
};

export const SKILLS = [
  {
    category: "Frontend",
    icon: "code",
    skills: ["React.js", "Material UI", "Redux", "HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "Backend",
    icon: "storage",
    skills: ["Node.js", "Express.js", "REST APIs", "Django"],
  },
  {
    category: "Database & Tools",
    icon: "layers",
    skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman", "DSA"],
  },
];


export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Full-Stack E-Commerce Platform",
    description:
      "A comprehensive MERN e-commerce application with authentication, cart, and admin panel.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux"],
    live: "https://e-commerce-website-using-mern-peach.vercel.app/",
    github:
      "https://github.com/Abhi420hck/E-Commerce_Website_using_MERN-/tree/main/frontend",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Local / Offline Chatbot (OLLAMA)",
    description:
      "A locally built UI for running Ollama LLMs with a focus on privacy and offline capability.",
    tech: ["React", "Ollama", "Local LLM"],
    live: "#",
    github: "https://github.com/Abhi420hck/Ollama",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "E-Commerce Admin Dashboard",
    description:
      "Admin dashboard to manage products, users, and orders with analytics.",
    tech: ["React", "Material UI", "Recharts", "Node.js"],
    live: "https://admin-amber-five.vercel.app/",
    github:
      "https://github.com/Abhi420hck/E-Commerce_Website_using_MERN-/tree/main/admin",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  },
];
