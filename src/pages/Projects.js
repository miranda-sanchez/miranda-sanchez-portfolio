import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  return (
    <main className="Projects">
      <h3>Selected Projects</h3>
      <section>
        <article>
          <h4>Musée du Louvre</h4>
          <span>Design & Development | 2024 | React</span>
          <div className="btn-container">
            <a href="https://louvree.netlify.app/" target="_blank">
              <button className="btn-action">
                Visit <FiArrowUpRight className="btn-arrow" />
              </button>
            </a>
            <a
              href="https://github.com/miranda-sanchez/louvre"
              target="_blank"
            ></a>
            <button>
              Code <FiArrowUpRight className="btn-arrow" />
            </button>
          </div>
        </article>
        <article>
          <h4>Fetsi (e-commerce)</h4>
          <span>
            Design, Development & Illustrations | 2023 | Vainilla JavaScript
          </span>
          <div className="btn-container">
            <a
              href="https://miranda-sanchez.github.io/fetzi"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-action">
                Visit <FiArrowUpRight className="btn-arrow" />
              </button>
            </a>
            <a
              href="https://github.com/miranda-sanchez/fetzi"
              target="_blank"
              rel="noreferrer"
            ></a>
            <button>
              Code <FiArrowUpRight className="btn-arrow" />
            </button>
          </div>
        </article>
        <article>
          <h4>Quizz App</h4>
          <span>Design & Development | 2022 | Vainilla JavaScript</span>
          <div className="btn-container">
            <a
              href="https://miranda-sanchez.github.io/quiz-app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-action">
                Visit <FiArrowUpRight className="btn-arrow" />
              </button>
            </a>
            <a
              href="https://github.com/miranda-sanchez/quiz-app/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <button>
              Code <FiArrowUpRight className="btn-arrow" />
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Projects;
