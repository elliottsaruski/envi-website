import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

function AboutPage() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "elliott-dev",
    },
  });

  const img = cld
    .image("about/envipic")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (
    <section className="about--wrapper">
      <AdvancedImage cldImg={img} className="envi-img-mayfest" />
      <div className="about-content">
        <h2>About</h2>
        <div className="spans">
          <span className="about--span">
            Born and raised in Miami, FL, envi, aka Elliott Saruski, is an
            electronic music producer, multi-media nerd, and front-end dev. His
            sound is characterized by heavy bass, melodic synths, and unique
            melodies. Loves all music but is currently in a dnb phase.
          </span>
          {/* <span className="about--span">
            Born and raised in Miami, FL, envi, aka Elliott Saruski, is an
            electronic music producer, multi-media nerd, and front-end dev. His
            sound is characterized by heavy bass, melodic synths, and unique
            melodies. Loves all music but is currently in a dnb phase.
          </span> */}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
