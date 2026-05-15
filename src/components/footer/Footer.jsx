import "./footer.css";

import { FaFacebookSquare, FaWhatsapp, FaInstagram } from "react-icons/fa";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { footerContent } from "../../content/content";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo-section">
              <h2>Oxford Kids PreSchool</h2>
            </div>

            <p className="footer-description">{footerContent.description}</p>

            <div className="footer-socials">
              {[
                {
                  icon: <FaFacebookSquare />,
                  link: "https://www.facebook.com/share/1GveARstu4/",
                },

                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/oxford_school_mira_road?igsh=ZnpodzJ6a3dubXBx",
                },

                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.me/919324279833",
                },
              ].map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul className="footer-links">
              {footerContent.quickLinks.map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Info</h3>

            <div className="footer-contact">
              {[
                {
                  icon: <IoMailOutline />,
                  name: "Email",
                  value: footerContent.contact.email,
                  link: `mailto:${footerContent.contact.email}`,
                },

                {
                  icon: <IoCallOutline />,
                  name: "Contact No",
                  value: footerContent.contact.phone,
                  link: `tel:${footerContent.contact.phone}`,
                },

                {
                  icon: <IoLocationOutline />,
                  name: "Address",
                  value: footerContent.contact.address,
                  link: "https://www.google.com/search?kgmid=%2Fg%2F11nhg96mt8&hl=en-IN&q=Oxford%20Kids%20Pre%20School&shem=rimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm1%2F2&kgs=9f9e159831a52dbf",
                },
              ].map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="footer-contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="footer-contact-icon">{item.icon}</div>

                  <div className="footer-contact-list">
                    <span>{item.name}</span>

                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
