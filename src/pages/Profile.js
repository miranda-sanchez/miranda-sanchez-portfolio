import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Profile = () => {
  return (
    <main className="Profile">
      <h3>About me</h3>
      <section className="profile-education">
        <p>
          <strong>Frontend web developer</strong> based in Buenos Aires.
          Graduate Student in{" "}
          <strong>English-Spanish Certified Translation</strong> and in{" "}
          <strong>Computer Science</strong>.
        </p>
        <p>
          I am passionate about integrating <strong>language skills</strong>{" "}
          with programming. My strong attention to detail and innovative
          approach drive me to create seamless, impactful digital solutions.
        </p>
        <Link to="/education">
          <button>
            Read more <FiArrowUpRight className="btn-arrow" />
          </button>
        </Link>
      </section>
      <section className="profile-technologies">
        <h4>Technologies</h4>
        <ul>
          <li></li>
        </ul>
      </section>
      <section className="profile-languages">
        <h4>Languages</h4>
        <ul>
          <li>Spanish: Native</li>
          <li>English: C2 (Bilingual)</li>
          <li>French: B1</li>
          <li>Portuguese: A1</li>
        </ul>
      </section>
    </main>
  );
};

export default Profile;
