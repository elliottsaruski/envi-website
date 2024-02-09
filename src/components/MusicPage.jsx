import NavBar from "./NavBar";
import Footer from "./Footer";

import { FaPlay } from "react-icons/fa";

function MusicPage() {
  return (
    <>
      <NavBar />
      <div className="music-header--wrapper">
        <h2 className="music-header--title">MUSIC</h2>
        <span className="music-header--span">i love electronic music</span>
        <div className="links--wrapper">
          <a
            className="music-link"
            href="https://open.spotify.com/artist/5AHQFsTiqO7W3E2OEEUaX7?si=ghRK6Ve1TaCkHNM-kxacFw">
            SPOTIFY
          </a>
          <a
            className="music-link"
            href="https://music.apple.com/us/artist/envi/1455988941">
            APPLE
          </a>
          <a className="music-link" href="https://soundcloud.com/envimusic">
            SOUNDCLOUD
          </a>
        </div>
      </div>
      <div className="musicPage--wrapper">
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
        <div className="card">
          <button className="play-song-button">
            <FaPlay className="faplay" style={{ scale: "3" }} />
          </button>
          <div className="song-info">
            <p className="song-title">title</p>
            <a className="song-links" href="">
              Links
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MusicPage;
