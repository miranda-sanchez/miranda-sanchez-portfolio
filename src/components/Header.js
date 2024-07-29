import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    const rolesElement = document.getElementById("roles");
    const text = rolesElement.innerHTML;
    rolesElement.innerHTML = text.replace(/, /g, ",<br>");
  }, []);

  return (
    <header>
      <h1>Miranda Sánchez</h1>
      <h2 id="roles">Developer, Translator, &amp; Artist</h2>

      <nav>
        <ul>
          <Link to="/">
            <li className={location.pathname === "/" ? "active" : ""}>
              Profile
            </li>
          </Link>
          <Link to="/education">
            <li className={location.pathname === "/education" ? "active" : ""}>
              Education
            </li>
          </Link>
          <Link to="/projects">
            <li className={location.pathname === "/projects" ? "active" : ""}>
              Projects
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
