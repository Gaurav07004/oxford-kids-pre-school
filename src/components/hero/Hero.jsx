import "./hero.css";

import { heroContent } from "../../content/content";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-tag">Admissions Open 2026-27</span>
          <h2>{heroContent.title}</h2>
          <p>{heroContent.description}</p>

          <div className="hero-buttons">
            <button className="primary-btn">Apply Now</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
              alt="Oxford Kids"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
