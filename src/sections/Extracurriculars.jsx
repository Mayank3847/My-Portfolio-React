import React from "react";
import { Code, MapPin } from "lucide-react";
import { MdSportsCricket, MdSportsVolleyball } from "react-icons/md";
import "../styles/extracurriculars.css";

const hobbies = [
  {
    icon: <Code size={40} />,
    title: "Coding & Programming",
    description: "I'm passionate about solving complex problems and building innovative solutions through code.",
  },
  {
    icon: <MdSportsCricket size={40} />,
    title: "Playing Cricket",
    description: "I love the strategy and teamwork involved in cricket, playing and watching matches in my free time.",
  },
  {
    icon: <MdSportsVolleyball size={40} />,
    title: "Playing Volleyball",
    description: "The fast-paced action and coordination of volleyball is another sport I enjoy both playing and following.",
  },
  {
    icon: <MapPin size={40} />,
    title: "Traveling & Exploring",
    description: "Exploring new places and cultures inspires my creativity and gives me fresh perspectives.",
  },
];

const Extracurriculars = () => {
  return (
    <section id="extracurriculars" className="extracurriculars-section">
      <h2 className="section-title">Extracurriculars & Hobbies</h2>
      <p className="section-subtitle">
        Beyond coding, here's what keeps me inspired and balanced
      </p>
      <div className="hobbies-row">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-description">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;
