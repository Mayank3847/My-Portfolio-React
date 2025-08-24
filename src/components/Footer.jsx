import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p>© 2025 Mayank Shekhar — My Portfolio</p>
      <button className="back-to-top" onClick={scrollToTop}>
        ↑ Back to Top
      </button>
    </footer>
  );
};

export default Footer;
