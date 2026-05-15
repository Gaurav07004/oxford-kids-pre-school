import { useEffect, useState } from "react";

import "./navbar.css";

import Logo from "../../assets/logo_1.png";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      id: "home",
    },

    {
      name: "About",
      id: "about",
    },

    {
      name: "Programs",
      id: "programs",
    },

    {
      name: "Gallery",
      id: "gallery",
    },

    {
      name: "Contact",
      id: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((item) => document.getElementById(item.id));

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 120;

          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo-section">
          <img src={Logo} alt="Oxford Kids Pre School" className="logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active-link" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoCloseOutline /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
