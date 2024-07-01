import { FaSpotify, FaSoundcloud } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { SiApplemusic } from "react-icons/si";

function Links() {
  return (
      <div className="links">
        <a href="https://open.spotify.com/artist/5AHQFsTiqO7W3E2OEEUaX7?si=ghRK6Ve1TaCkHNM-kxacFw">
          <FaSpotify className="link-icon" />
        </a>
        <a
          aria-valuetext="spotify.com"
          alt="spotify.com"
          aria-label="spotify.com"
          href="https://music.apple.com/us/artist/envi/1455988941">
          <SiApplemusic className="link-icon" />
        </a>
        <a href="https://soundcloud.com/envimusic">
          <FaSoundcloud className="link-icon" />
        </a>
        <a className="music-link" href="">
          <FaXTwitter />
        </a>
        <a href="https://instagram.com/elliottsaruski" target="_blank">
          <FaInstagram />
        </a>
      </div>
  );
}

export default Links;
