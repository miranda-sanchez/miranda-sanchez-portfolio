import React from "react";

const Projects = () => {
  return (
    <main className="Projects">
      <h3>Selected Projects</h3>
      <ol>
        <li>
          Musée du Louvre
          <div className="btn-container">
            <a href="https://louvree.netlify.app/" target="_blank">
              <button className="btn-action">Visit</button>
            </a>
            <a
              href="https://github.com/miranda-sanchez/louvre"
              target="_blank"
            ></a>
            <button>Code</button>
          </div>
        </li>
        <li>
          Fetsi (Furniture e-commerce)
          <div className="btn-container">
            <a href="https://miranda-sanchez.github.io/fetzi" target="_blank">
              <button className="btn-action">Visit</button>
            </a>
            <a
              href="https://github.com/miranda-sanchez/louvre"
              target="_blank"
            ></a>
            <button>Code</button>
          </div>
        </li>
      </ol>
    </main>
  );
};

export default Projects;
