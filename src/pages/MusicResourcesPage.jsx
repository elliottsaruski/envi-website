import { imageUrl } from "../utils/cloudinary";

function MusicResourcesPage() {
  return (
    <section className="music-resources--wrapper">
      <h2>Resources</h2>
      <div>
        <div className="resource-wrapper">
          <h3>Presets</h3>
          <a
            href="https://envimusic.gumroad.com/l/vitalpresetsbyenvi"
            target="_blank">
            <img
              src={imageUrl("resources/vitalpresets")}
              alt="Vital Presets by envi"
            />
            {/* <figcaption>Vital Presets by envi - FREE</figcaption> */}
          </a>
        </div>
      </div>
      <div className="resource-wrapper">
        <h3>Sample Packs</h3>
        <p>coming soon...</p>
      </div>
    </section>
  );
}

export default MusicResourcesPage;
