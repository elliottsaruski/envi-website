import enviMAYFESTphoto from "../assets/envi-mayfest-actionshot.jpg";
import { FaSpotify, FaSoundcloud } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

function AboutPage() {
  return (
    <section className="about--wrapper">
      <div className="about--content">
        <h2>about</h2>
        <span className="about--span">
          Born and raised in Miami,FL, envi, aka Elliott Saruski, is an
          electronic music producer, multi-media nerd, and front-end dev. His
          sound is characterized by heavy bass, melodic synths, and unique
          melodies. Loves all music but is currently in a dnb phase.
        </span>

        <div className="links">
          <a
            className="music-link"
            href="https://open.spotify.com/artist/5AHQFsTiqO7W3E2OEEUaX7?si=ghRK6Ve1TaCkHNM-kxacFw">
            <FaSpotify className="link-icon" />
          </a>
          <a
            className="music-link"
            aria-valuetext="spotify.com"
            alt="spotify.com"
            aria-label="spotify.com"
            href="https://music.apple.com/us/artist/envi/1455988941">
            <SiApplemusic className="link-icon" />
          </a>
          <a className="music-link" href="https://soundcloud.com/envimusic">
            <FaSoundcloud className="link-icon" />
          </a>
        </div>
      </div>

      <img
        className="envi-img-mayfest"
        src={enviMAYFESTphoto}
        alt="envi MAYFEST photo - envi DJing"
      />
    </section>
  );
}

export default AboutPage;
