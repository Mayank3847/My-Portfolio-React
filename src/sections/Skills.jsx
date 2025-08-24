import React, { useEffect, useState } from "react";
import "../styles/skills.css";

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillData = [
    { name: "DSA", level: 90, color: "#4285F4" }, // Blue
    { name: "Java", level: 85, color: "#34A853" }, // Green
    { name: "CSS", level: 85, color: "#9C27B0" }, // Purple
    { name: "HTML", level: 80, color: "#FF5722" }, // Orange
    { name: "Python", level: 75, color: "#FFC107" }, // Yellow
    { name: "JavaScript", level: 70, color: "#4CAF50" }, // Light Green
    { name: "SQL", level: 70, color: "#673AB7" }, // Deep Purple
    { name: "React", level: 60, color: "#00BCD4" }, // Cyan
  ];

  return (
    <section id="skills" className="skills section">
      <div className="skills-wrapper">
        <div className="skills-content">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="skills-container">
            {skillData.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-progress ${animated ? "animate" : ""}`}
                    style={{ 
                      width: animated ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-image">
          <div className="laptop-mockup">
            <div className="laptop-screen">
              <div className="code-editor">
                <div className="editor-header">
                  <div className="editor-buttons">
                    <span className="btn red"></span>
                    <span className="btn yellow"></span>
                    <span className="btn green"></span>
                  </div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">function</span>
                    <span className="code-function"> createPortfolio</span>
                    <span className="code-bracket">()</span>
                    <span className="code-bracket"> {`{`}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-indent">  </span>
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> skills</span>
                    <span className="code-operator"> = </span>
                    <span className="code-bracket">[</span>
                  </div>
                   <div className="code-line">
                    <span className="code-indent">    </span>
                    <span className="code-string">'DSA'</span>
                    <span className="code-punctuation">,</span>
                    <span className="code-string"> 'Java'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-indent">    </span>
                    <span className="code-string">'React'</span>
                    <span className="code-punctuation">,</span>
                    <span className="code-string"> 'JavaScript'</span>
                    <span className="code-punctuation">,</span>
                  </div>
                   <div className="code-line">
                    <span className="code-indent">    </span>
                    <span className="code-string">'HTML5'</span>
                    <span className="code-punctuation">,</span>
                    <span className="code-string"> 'CSS3'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-indent">    </span>
                    <span className="code-string">'Python'</span>
                    <span className="code-punctuation">,</span>
                    <span className="code-string"> 'SQL'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-indent">  </span>
                    <span className="code-bracket">];</span>
                  </div>
                  <div className="code-line">
                    <span className="code-indent">  </span>
                    <span className="code-keyword">return</span>
                    <span className="code-variable"> portfolio</span>
                    <span className="code-punctuation">;</span>
                  </div>
                  <div className="code-line">
                    <span className="code-bracket">{`}`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}