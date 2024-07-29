import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Profile = () => {
  return (
    <main className="Profile">
      <h3>About me</h3>
      <section className="profile-education">
        <h4>Academic background</h4>
        <p>
          Graduate Student in English-Spanish Certified Translation, having
          passed 30 out of 32 courses, and specializing in legal, economic,
          financial, medical, and technical texts.
        </p>
        <p>
          Graduate Computer Science student and frontend programmer with two
          years of experience. Great creative capacity with an eye for detail.
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
      <section className="profile-softskills">
        <h4>Soft Skills</h4>
        <p>
          Solid communication and teamwork skills. Fast learner with a strong
          commitment to further improving in both fields.
        </p>
      </section>
    </main>
  );
};

export default Profile;
