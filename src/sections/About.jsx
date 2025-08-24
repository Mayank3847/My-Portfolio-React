import React, { useState } from "react";
import "../styles/about.css";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about section">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-photo">
          <div className="profile-pic-container">
            <img src="/profile.jpg" alt="Mayank Shekhar" />
          </div>
        </div>

        {/* About Text */}
        <div className="about-text">
          <h2 className="section-title">ABOUT ME</h2>
          <h3>Hello, I’m Mayank</h3>

          <p>
            <strong>
              I'm a B.Tech Computer Science student at Galgotias University
            </strong>{" "}
            with a deep love for solving real-world problems through{" "}
            <span className="highlight">Data Structures & Algorithms</span> —
            especially using <span className="highlight">Java</span>.
          </p>

          <p>
            I began exploring coding out of curiosity, and quickly discovered a
            passion for solving real-world challenges using logic and structure.
            I realized I enjoy{" "}
            <span className="highlight">logical problem-solving</span> just as
            much as building beautiful, responsive UIs.
          </p>

          <p>
            Over time, I started <strong>creating frontend projects</strong>{" "}
            using{" "}
            <span className="highlight">HTML, CSS, Bootstrap, and React</span>. I
            love making interfaces that not only look good, but feel intuitive.
          </p>

          <p>
            <strong>When I’m not coding,</strong> you’ll find me playing cricket
            or volleyball, or traveling to places that inspire new perspectives.
          </p>

          <p className="available">
            I'm currently open to internships and full-time job opportunities
            related to frontend development and DSA mentoring!
          </p>

          {showMore && (
            <div className="extra-info">
              <p>
                <strong>Strength:</strong> Quick learner with a strong ability
                to adapt to new technologies quickly and effectively.
              </p>
              <p>
                <strong>Weakness:</strong> Sometimes impatient when solutions
                don’t come immediately, but I channel this energy into working
                harder until I solve the problem.
              </p>
            </div>
          )}

          <button
            className="read-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}
