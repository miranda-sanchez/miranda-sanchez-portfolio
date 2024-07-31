import React from "react";

const Education = () => {
  return (
    <main className="Education">
      <h3>Education</h3>
      <div className="education-container">
        <h4>English-Spanish Certified Translation</h4>
        <table>
          <tr>
            <td colSpan="2" className="years">
              2019 - Present
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="university">
              <strong>University of Buenos Aires</strong>
            </td>
          </tr>
          <tr>
            <th>Graduation year</th>
            <td>2024</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>6 years</td>
          </tr>
          <tr>
            <th>GPA</th>
            <td>8.70/10</td>
          </tr>
          <tr>
            <td colSpan="2" className="education-info">
              30 out of 32 courses successfully passed. Translation of texts
              from English to Spanish and vice versa. Specialized in legal,
              economic, financial, medical and technical texts.
            </td>
          </tr>
        </table>
      </div>
      <div className="education-container">
        <h4>Computer Science</h4>
        <table>
          <tr>
            <td colSpan="2" className="years">
              2024 - Present
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="university">
              Universidad Nacional del Oeste
            </td>
          </tr>
          <tr>
            <th>Graduation year</th>
            <td>2029</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>5 years</td>
          </tr>
          <tr>
            <th>GPA</th>
            <td>10/10</td>
          </tr>
          <tr>
            <td colSpan="2" className="education-info">
              Quality control of software standards or software integrated with
              other components and auditing of computer systems, expert
              evaluations in ADR and litigation proceedings, and appraisals
              related to computer systems.
            </td>
          </tr>
        </table>
      </div>
      <div className="education-container">
        <h4>Graphic Design</h4>
        <table>
          <tr>
            <td colSpan="2" className="years">
              2018 (Incomplete)
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="university">
              <strong>University of Buenos Aires</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="education-info">
              Development of projects using Illustrator and Photoshop.
            </td>
          </tr>
        </table>
      </div>
      <p className="note">
        Note: All of the aforementioned degrees are equivalent to a U.S.
        Master's degree in terms of both contents and credits.
      </p>
    </main>
  );
};

export default Education;
