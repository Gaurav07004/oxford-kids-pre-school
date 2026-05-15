import { aboutContent } from "../../content/content";
import "./about.css";

import {
  PiPuzzlePieceBold,
  PiShieldCheckBold,
  PiSmileyBold,
  PiHeartBold,
  PiTargetBold,
  PiEyeBold,
} from "react-icons/pi";

const statsIcons = [
  <PiPuzzlePieceBold />,
  <PiShieldCheckBold />,
  <PiSmileyBold />,
  <PiHeartBold />,
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span>ABOUT</span> US
        </div>

        <p className="about-description">
          <span>Oxford Kids Pre School</span> {aboutContent.description}
        </p>

        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon">
                <PiTargetBold />
              </div>

              <h3>{aboutContent.mission.title}</h3>
            </div>

            <p>{aboutContent.mission.description}</p>
          </div>

          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon">
                <PiEyeBold />
              </div>

              <h3>{aboutContent.vision.title}</h3>
            </div>

            <p>{aboutContent.vision.description}</p>
          </div>
        </div>

        <div className="stats-section">
          <h2>Our Highlights</h2>

          <div className="stats-grid">
            {aboutContent.highlights.map((item, index) => (
              <div className="stats-card" key={index}>
                <div className="stats-icon">{statsIcons[index]}</div>

                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>

          <p className="values-description">{aboutContent.valuesDescription}</p>

          <div className="values-grid">
            {aboutContent.values.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
