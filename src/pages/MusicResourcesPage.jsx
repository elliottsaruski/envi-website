import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

function MusicResourcesPage() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "elliott-dev",
    },
  });

  const img = cld.image("resources/vitalpresets");

  return (
    <section className="music-resources--wrapper">
      <h2>Music Resources</h2>
      <div>
        <div className="presets-wrapper">
          <h3>Presets</h3>
          <span>Sounds created for musicians for popular VST instruments.</span>
        </div>
        <a
          href="https://envimusic.gumroad.com/l/vitalpresetsbyenvi"
          target="_blank">
          <AdvancedImage cldImg={img} />
          {/* <figcaption>Vital Presets by envi - FREE</figcaption> */}
        </a>
      </div>
      <div className="presets-wrapper">
        <h3>Sample Packs</h3>
        <p>coming soon...</p>
      </div>
    </section>
  );
}

export default MusicResourcesPage;
