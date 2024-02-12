import NavBar from "./NavBar";
import Footer from "./Footer";
import myTracks from "../data/MusicData";
import MusicTrackCard from "./MusicTrackCard";

import { FaSpotify, FaSoundcloud } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

function MusicPage() {
  const musicList = myTracks.map((track) => {
    return (
      <MusicTrackCard
        key={track.key}
        id={track.id}
        title={track.title}
        artwork={track.artwork}
        src={track.src}
        links={track.links}
      />
    );
  });

  return (
    <div id="full-music-page">
      <NavBar />
      <div className="music-header--wrapper">
        <h2 className="music-header--title">MUSIC</h2>
        <div className="links--wrapper">
          <span className="music-header--span">i love electronic music</span>
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
      </div>
      {/* --------------------RENDER LIST OF TRACKS ------------*/}
      <div className="music--wrapper">{musicList}</div>
      <Footer />
    </div>
  );
}

export default MusicPage;
