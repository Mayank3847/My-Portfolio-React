// src/sections/Projects.jsx
import React, { useState } from "react";
import "../styles/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ✅ Icons

const projectsData = [
  {
  title: "TaskManager - Collaborative Task Management System",
  image: "/assets/taskmanager.jpg",
  tech: [
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "JWT Authentication",
    "Tailwind CSS",
    "React Query",
    "Zod Validation"
  ],
  short:
    "Full-stack collaborative task management application with real-time updates where users can create, assign, track tasks, receive instant notifications, and manage team workflows efficiently.",
  details: [
    "User registration and login with JWT authentication and HttpOnly cookies",
    "Complete CRUD operations for tasks with role-based access control",
    "Real-time task updates using Socket.io WebSocket connections",
    "Task assignment system with instant in-app notifications",
    "Advanced filtering by status (To Do, In Progress, Review, Completed) and priority (Low, Medium, High, Urgent)",
    "Dynamic sorting by due date and creation date",
    "Personal dashboard with statistics cards showing assigned tasks, created tasks, and overdue tasks",
    "Only task creators can delete tasks (authorization middleware)",
    "Persistent notification system with read/unread status tracking",
    "Backend built with Node.js + Express.js + MongoDB using Service/Repository pattern",
    "Frontend built with React + TypeScript + Vite with 20+ reusable components",
    "Form validation using React Hook Form and Zod schemas on both client and server",
    "Protected routes and API endpoints with custom auth middleware",
    "Fully responsive UI with Tailwind CSS (mobile to 4K screens)",
    "Optimistic UI updates and caching with React Query/TanStack Query",
    "Toast notifications for user feedback and loading skeleton states",
    "Unit tests with Jest achieving 80%+ code coverage",
    "MongoDB database with 3 collections (Users, Tasks, Notifications) and proper indexing",
    "Deployed frontend on Netlify and backend on Render with MongoDB Atlas",
    "Comprehensive API documentation with 15+ RESTful endpoints"
  ],
  github: "https://github.com/Mayank3847/task-manager-fullstack-combined.git",
  live: "https://task-manager-app-ms.netlify.app/"
},
 {
  title: "Shopping Cart Web App",
  image: "/assets/shopping_cart.jpg",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "CSS",
    "REST API"
  ],
  short:
    "Full-stack shopping cart system where users can sign up, log in, browse items, add to cart, checkout, and view order history.",
  details: [
    "User signup and login with JWT authentication",
    "Single active login token per user (secure session handling)",
    "Add items to cart and view cart contents",
    "Checkout converts cart into an order",
    "Order history with all past orders",
    "Backend built with Node.js + Express.js + MongoDB",
    "Protected routes using custom auth middleware",
    "Frontend built in React with clean UI and plain CSS",
    "Fully responsive user interface",
    "Deployed backend and frontend separately on cloud",
  ],
  github: "https://github.com/Mayank3847/shopping-cart", 
  live: "https://692220cedf115075551bccbc--shopping-cart-frontend-1.netlify.app/"
},
{
  title: "GigFlow – Freelance Hiring Platform",
  image: "/assets/gigflow.png",
  tech: [
    "React.js",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Socket.io",
    "REST API",
    "Tailwind CSS"
  ],
  short:
    "Full-stack freelance hiring platform where clients post gigs, freelancers bid in real time, and hiring decisions trigger instant notifications.",
  details: [
    "User authentication with JWT and HttpOnly cookies",
    "Role-based system: client (gig owner) and freelancer",
    "Clients can post gigs with title, description, and budget",
    "Freelancers can browse gigs and submit bids",
    "Only gig owners can view bids on their posted gigs",
    "Atomic hire logic ensures only one freelancer can be hired per gig",
    "Hire and reject actions update gig and bid status securely",
    "Real-time notifications using Socket.io for bids, hire, and rejection",
    "Notification bell with unread count and persistence per user",
    "Session-safe authentication handling on refresh and redeploy",
    "Protected routes using custom auth middleware",
    "Optimistic UI updates for hire/reject actions",
    "Frontend built with React + Redux Toolkit for state management",
    "Backend built with Node.js, Express.js, and MongoDB",
    "Fully responsive UI with clean, production-ready design",
    "Frontend and backend deployed separately on cloud platforms",
  ],
  github: "https://github.com/Mayank3847/gigflow-platform",
  live: "https://gigflow-platform-ms7295.netlify.app"
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
    github: "https://github.com/Mayank3847/real-time-poll-combined",
    live: "https://695eca117d8d5a0008fa7eda--polling-app-ms7295.netlify.app/",
  },
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
  title: "Quiz Web App",
  image: "/assets/quiz-app.png",
  tech: ["React.js", "React Router", "JavaScript", "CSS", "HTML"],
  short:
    "Interactive quiz application with timer, multiple-choice questions, results evaluation, and fallback offline mode.",
  details: [
    "Start quiz with multiple-choice questions",
    "Timer-based quiz with countdown for each question",
    "Dynamic progress bar showing question progress",
    "Fallback questions if API is unavailable",
    "Results page showing score and answers summary",
    "Navigation with React Router (Home, Quiz, Results)",
    "Reusable components for Navbar, QuestionCard, and Timer",
    "Responsive design for mobile and desktop",
    "State management with React Hooks (useState, useEffect)",
  ],
  github: "https://github.com/Mayank3847/Quiz-App",
  live: "https://mayank3847-quiz-app.netlify.app/",
}
,
  
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
