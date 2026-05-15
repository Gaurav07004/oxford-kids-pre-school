import "./program.css";

import {
  FaRegSmile,
  FaRegBookmark,
  FaRegLightbulb,
  FaRegUser,
} from "react-icons/fa";

import { programsContent } from "../../content/content";

const icons = [
  <FaRegSmile />,
  <FaRegBookmark />,
  <FaRegLightbulb />,
  <FaRegUser />,
];

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <div className="programs-container">
        <div className="programs-heading">
          <span>{programsContent.heading}</span>{" "}
          {programsContent.headingHighlight}
        </div>

        <p className="programs-description">{programsContent.description}</p>

        <div className="programs-grid">
          {programsContent.programs.map((item, index) => (
            <div className="program-card" key={index}>
              <div>
                <div className="program-header">
                  <div className="program-icon">{icons[index]}</div>
                  <h3>{item.title}</h3>
                </div>
                <span className="program-age">{item.age}</span>
                <p>{item.description}</p>
              </div>
              <button
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
