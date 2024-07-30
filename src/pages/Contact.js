import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="Contact">
      <h3>Contact me</h3>
      <section className="contact-email">
        <p>sanchezmiranda078@gmail.com</p>
      </section>
      <section>
        <div className="btn-container">
          <Link to="https://www.linkedin.com/in/miranda--sanchez/">
            <button>
              <FiLinkedin className="btn-icon" />
            </button>
          </Link>
          <Link to="https://github.com/miranda-sanchez">
            <button>
              <FiGithub className="btn-icon" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
