import React from "react";
import Navbar from "../components/Navbar";
import "../styles/header.css"; // we'll add CSS

export default function Header() {
  return (
    <section className="header-section" id="home">
      <Navbar />
      <div className="hero">
        <h1>
          Hi, I'm <span>Mayank Shekhar</span>
        </h1>
        <p>Frontend Developer | React Enthusiast</p>
        <a href="#about" className="btn">
          Explore More
        </a>
      </div>
    </section>
  );
}
