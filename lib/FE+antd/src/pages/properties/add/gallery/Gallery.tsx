import { Card, Upload } from "core";
import texts from "locales/gallery.json";
import "./gallery.scss";

const Gallery = () => (
  <section className="gallery-section" data-testid="gallery">
    <Card title={texts.images} className="gallery-card">
      <Upload name="image" className="upload-box" multiple />
    </Card>
    <Card title={texts.videos} className="gallery-card">
      <Upload name="video" className="upload-box" multiple />
    </Card>
  </section>
);

export default Gallery;
