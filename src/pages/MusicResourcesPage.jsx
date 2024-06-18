import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

function MusicResourcesPage() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "elliott-dev",
    },
  });

  const img = cld
    .image("resources/vitalpresets")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (
    <section className="music-resources--wrapper">
      <h2>Music Resources</h2>
      <div>
        <h3>Presets</h3>
        <a
          href="https://envimusic.gumroad.com/l/vitalpresetsbyenvi"
          target="_blank">
          <AdvancedImage cldImg={img} />
          <figcaption>Vital Presets by envi - FREE</figcaption>
        </a>
      </div>
      <div>
        <h3>Sample Packs</h3>
        <span>coming soon...</span>
      </div>
    </section>
  );
}

export default MusicResourcesPage;
