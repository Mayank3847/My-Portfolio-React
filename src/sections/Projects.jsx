// src/sections/Projects.jsx
import React, { useState } from "react";
import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ✅ Icons

const projectsData = [
  {
    title: "Weather Web App",
    image: "/assets/weather-app.webp",
    tech: ["React.js", "OpenWeatherMap API", "CSS", "HTML"],
    short:
      "Real-time weather updates with search by city, showing temp, humidity, wind, and dynamic icons.",
    details: [
      "Search weather by city",
      "Displays temperature, humidity, wind speed",
      "Dynamic icons for weather conditions",
      "Responsive UI for all devices",
      "State management with React Hooks",
    ],
    github: "https://github.com/Mayank3847/Weather_App_React",
    live: "https://mayank3847.github.io/Weather_App_React/",
  },
  {
    title: "Real-Time Polling Platform",
    image: "/assets/realtime-poll.jpeg",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    short:
      "A full-stack polling app with real-time vote updates using WebSockets.",
    details: [
      "Admins create polls with unique session codes",
      "Users join and vote live",
      "Real-time synchronization via Socket.IO",
      "MongoDB for storing poll data",
    ],
    github: "https://github.com/Mayank3847/Real-Time-Interaction",
    live: "https://github.com/Mayank3847/Real-Time-Interaction",
  },
  {
    title: "Portfolio Website",
    image: "/assets/portfolio.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    short:
      "Personal portfolio showcasing academic details, skills, and projects.",
    details: [
      "Smooth scrolling",
      "Active navigation highlight",
      "Sections: Skills, Projects, Certifications, Achievements, Contact",
      "Social media profile integration",
    ],
    github: "https://github.com/Mayank3847/Portfolio",
    live: "https://basic-mayank-portfolio.netlify.app/",
  },
  {
    title: "Responsive Stopwatch Web Application",
    image: "/assets/stopwatch.png",
    tech: ["HTML", "CSS", "JavaScript"],
    short: "A fully responsive stopwatch with lap recording.",
    details: [
      "Start, Pause, Resume, Reset",
      "Lap recording feature",
      "Responsive design for all devices",
    ],
    github: "https://github.com/Mayank3847/Stopwatch-",
    live: "https://stopwatch-by-mayank.netlify.app/",
  },
  {
    title: "Task Time Manager",
    image: "/assets/task-time-manager.jpg",
    tech: ["React.js", "JavaScript", "CSS"],
    short:
      "A task management app with time tracking features to boost productivity.",
    details: [
      "Add, edit, delete tasks",
      "Mark tasks as complete/incomplete",
      "Filter by status",
      "Set estimated completion time",
      "Responsive across devices",
    ],
    github: "https://github.com/Mayank3847/React-Task-Time-Manager",
    live: "https://mayank3847-react-task-time-manager.netlify.app/",
  },
  {
    title: "Calculator Web App",
    image: "/assets/calculator.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "A mobile-friendly calculator implementing core arithmetic without eval().",
    details: [
      "Addition, Subtraction, Multiplication, Division",
      "Manual logic without built-in math functions",
      "Responsive for all screen sizes",
    ],
    github: "https://github.com/Mayank3847/Calculator",
    live: "https://calculator3847mayank.netlify.app/",
  },
  {
    title: "Simon Says Game",
    image: "/assets/simon-says.png",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "A Simon Says memory game with increasing difficulty and timer challenges.",
    details: [
      "Pattern generation & validation",
      "Difficulty increases with score",
      "Timer-based challenge mode",
      "Responsive gameplay",
    ],
    github: "https://github.com/Mayank3847/Simon-Says-Game",
    live: "https://simon-says-game3847.netlify.app/",
  },
  {
    title: "Netflix Homepage Clone",
    image: "/assets/netflix-clone.png",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "A clone of Netflix homepage with responsive UI and hover interactions.",
    details: [
      "Grid-based movie sections",
      "Responsive navbar",
      "Hover effects for movie cards",
      "Adaptive design for mobile, tablet, and desktop",
    ],
    github: "https://github.com/Mayank3847/Netflix-Clone",
    live: "https://mayank-netlify-clone.netlify.app/",
  },
  {
    title: "Pizza Shop Web App",
    image: "/assets/pizza-shop.webp",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "A responsive pizza shop website with interactive menu and ordering system.",
    details: [
      "Dynamic pizza menu with customization",
      "Home delivery, dine-in, takeaway",
      "Interactive user-friendly interface",
      "Optimized for all devices",
    ],
    github: "https://github.com/Mayank3847/Pizza-Shop-Web-Application",
    live: "https://mayank3847-pizza-shop-webapp.netlify.app/",
  },
  {
    title: "Resumelytics Web App",
    image: "/assets/resumelytics.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "Group project: A resume analysis tool with frontend login, signup, and upload features.",
    details: [
      "Login & Signup with forgot password",
      "Resume upload for analysis",
      "Frontend-led collaboration project",
      "Responsive UI",
    ],
    github: "https://github.com/Mayank3847/Resumelytic",
    live: "https://resumelytics-mayank3847.netlify.app/",
  },
];

// Helper for class names
const sanitize = (txt) => txt.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState(null);

  // ✅ Only 2 projects by default, all projects when "Show More" clicked
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        A showcase of my frontend development and programming projects
      </p>

      <div className="projects-grid">
        {visibleProjects.map((p, idx) => (
          <article className="project-card" key={idx}>
            <img src={p.image} alt={p.title} className="project-image" />

            <div className="card-body">
              {/* ✅ Project Title + Icons */}
              <div className="title-row">
                <h3 className="project-name">{p.title}</h3>
                <div className="link-icons">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="tag-row">
                {p.tech.map((t, i) => (
                  <span key={i} className={`pill pill-${sanitize(t)}`}>
                    {t}
                  </span>
                ))}
              </div>

              <p className="project-desc">{p.short}</p>

              {expanded === idx && (
                <ul className="project-details">
                  {p.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}

              <div className="card-actions">
                <button
                  className="read-more"
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                >
                  {expanded === idx ? "Show less" : "Continue reading"} →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ✅ Show More / Show Less button immediately after cards */}
      <div className="see-more">
        <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
