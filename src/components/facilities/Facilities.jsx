import { facilitiesContent } from "../../content/content";
import "./facilities.css";

import {
  PiChalkboardTeacherBold,
  PiShieldCheckBold,
  PiPaletteBold,
  PiPuzzlePieceBold,
  PiHeartBold,
} from "react-icons/pi";

const icons = [
  <PiChalkboardTeacherBold />,
  <PiShieldCheckBold />,
  <PiPaletteBold />,
  <PiPuzzlePieceBold />,
  <PiHeartBold />,
  <PiHeartBold />,
];

const Facilities = () => {
  return (
    <section className="facilities" id="facilities">
      <div className="facilities-container">
        <div className="facilities-heading">
          <span>{facilitiesContent.heading}</span>{" "}
          {facilitiesContent.headingHighlight}
        </div>

        <p className="facilities-description">
          {facilitiesContent.description}
        </p>

        <div className="facilities-grid">
          {facilitiesContent.facilities.map((item, index) => (
            <div className="facility-card" key={index}>
              <div className="program-header">
                <div className="facility-icon">{icons[index]}</div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
