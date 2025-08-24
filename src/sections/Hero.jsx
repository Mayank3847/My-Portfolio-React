import React from "react";
import "../styles/Hero.css";
import profilePic from "../assets/profile.jpg"; // ✅ keep your profile image here
import { ReactTyped } from "react-typed";

export default function Hero() {
  // ✅ Absolute path to the PDF in Vite (public/). Must match the filename EXACTLY.
  //    If your deploy uses a non-root base, import.meta.env.BASE_URL keeps it working.
  const RESUME_PATH =
    `${import.meta.env?.BASE_URL ?? "/"}Mayank_Shekahr_Resume.pdf`;

  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH; // ✅ points to public/Mayank_Shekahr_Resume.pdf
    link.download = "Mayank_Shekahr_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle resume view
  const handleResumeView = () => {
    window.open(RESUME_PATH, "_blank"); // ✅ open in new tab (no SPA fallback)
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side Content */}
        <div className="hero-left">
          <p className="intro-text">HELLO!</p>
          <h1>
            I Am <span className="highlight">Mayank Shekhar</span>
          </h1>
          {/* ✅ Animated Role */}
          <h2 className="role">
            <ReactTyped
              strings={[
                "DSA Enthusiast",
                "Aspiring Developer",
                "Java Coder",
                "Lifelong Learner",
                "Problem Solver",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>
          <p className="description">
            Continuously sharpening my problem-solving skills through DSA while
            crafting intuitive user interfaces as a frontend developer.
          </p>
          {/* ✅ Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              <i className="fas fa-briefcase"></i> View Work
            </a>
            <a href="#contact" className="btn secondary">
              <i className="fas fa-user"></i> Hire Me
            </a>
            <div className="resume-dropdown">
              <button className="btn tertiary">
                <i className="fas fa-file-pdf"></i> Resume
                <i className="fas fa-chevron-down dropdown-arrow"></i>
              </button>
              <div className="dropdown-menu">
                <button onClick={handleResumeView} className="dropdown-item">
                  <i className="fas fa-eye"></i> View Resume
                </button>
                <button onClick={handleResumeDownload} className="dropdown-item">
                  <i className="fas fa-download"></i> Download Resume
                </button>
              </div>
            </div>
          </div>
          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/mayank-shekhar-44a81328a/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Mayank3847"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://leetcode.com/u/Mayank7295/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/mayankshekt8f/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="fab fa-gg"></i>
            </a>
            <a
              href="mailto:mayankshekhar0303@gmail.com"
              className="social-icon"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.hackerrank.com/profile/mayankshekhar031"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="fab fa-hackerrank"></i>
            </a>
          </div>
        </div>
        {/* Right Side Profile Picture */}
        <div className="hero-right">
          <div className="profile-pic-container">
            <img src={profilePic} alt="Mayank Shekhar profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
