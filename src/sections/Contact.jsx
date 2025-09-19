import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css"; // Ensure this path is correct

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xew0rzo", // 🔹 Your Service ID (from EmailJS dashboard)
        "template_wtbfb8f",  // 🔹 Your Template ID
        form.current,
        "asIcOcyKKcACd5-yh"    // 🔹 Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Let's Connect</p>
      <p className="contact-description">
        If you would like to reach out, feel free to use the contact form or
        connect with me through my social profiles.
      </p>

      <div className="contact-container">
        {/* Left side info */}
        <div className="contact-info">
          <p>
            <i className="fas fa-phone"></i> <strong>Phone:</strong>{" "}
            +91 7295 059 168
          </p>
          <p>
            <i className="fas fa-envelope"></i> <strong>Email:</strong>{" "}
            <a href="mailto:mayankshekhar0303@gmail.com">
              mayankshekhar0303@gmail.com
            </a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> <strong>Location:</strong>{" "}
            Noida , India
          </p>

          {/* Social Icons */}
          <div className="social-links">
            <h4>Connect with me</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/mayank-shekhar-44a81328a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Mayank3847"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://leetcode.com/u/Mayank7295/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon leetcode"
              >
                <i className="fas fa-code"></i>
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/mayankshekt8f/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon gfg"
              >
                <i className="fab fa-gg"></i>
              </a>
              <a
                href="mailto:mayankshekhar0303@gmail.com"
                className="social-icon email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://www.hackerrank.com/profile/mayankshekhar031"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hackerrank"
              >
                <i className="fab fa-hackerrank"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="John Doe" required />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              required
            />

            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Let's build something amazing together!"
              required
            ></textarea>

            <button type="submit" className="send-btn">
              <i className="fas fa-paper-plane"></i> Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
