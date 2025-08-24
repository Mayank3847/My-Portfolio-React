// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects"; 
import Extracurriculars from "./sections/Extracurriculars";
import Contact from "./sections/Contact"; // ✅ Correct import
import Footer from "./components/Footer"; // ✅ Correct import

import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* ✅ Home Section */}
        <Hero />

        {/* ✅ About Section */}
        <About />

        {/* ✅ Education Section */}
        <Education />

        {/* ✅ Skills Section */}
        <Skills />

        {/* ✅ Projects Section */}
        <Projects />

        {/* ✅ Extracurricular Section */}
        <Extracurriculars />

        {/* ✅ Contact Section */}
        <Contact />
      </main>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
