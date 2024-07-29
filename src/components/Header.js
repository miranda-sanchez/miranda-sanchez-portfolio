import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const rolesElement = document.getElementById("roles");
    const text = rolesElement.innerHTML;
    rolesElement.innerHTML = text.replace(/, /g, ",<br>");
  }, []);

  return (
    <header>
      <h1>Miranda Sánchez</h1>
      <h2 id="roles">
        Fontend Developer, English-Spanish Translator, &amp; Digital Artist
      </h2>

      <nav>
        <ul>
          <Link to="/">
            <li>Profile</li>
          </Link>
          <Link to="/education">
            <li>Education</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
