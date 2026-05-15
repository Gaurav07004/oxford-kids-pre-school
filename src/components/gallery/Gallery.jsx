import "./gallery.css";

import { galleryContent } from "../../content/content";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="gallery-heading">
          <span>{galleryContent.heading}</span>{" "}
          {galleryContent.headingHighlight}
        </div>

        <p className="gallery-description">{galleryContent.description}</p>

        <div className="gallery-grid">
          {galleryContent.images.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.image} alt="Oxford Kids Gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
