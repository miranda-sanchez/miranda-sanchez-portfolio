import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

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
        <div className="btn-container">
          <button className="btn-action">
            CV <FiArrowDown className="btn-arrow" />
          </button>

          <Link to="/education">
            <button>
              Read more <FiArrowUpRight className="btn-arrow" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Profile;
