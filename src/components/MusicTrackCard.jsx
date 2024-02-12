import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

function MusicTrackCard({ id, title, artwork, src }) {
  return (
    <div className="card" id={id}>
      <img className="song-artwork" src={artwork} alt="song cover" />
      <audio className="song-audio-src" src={src} />
      <button className="play-song-button">
        <FaPlay className="faplay" style={{ scale: "5" }} />
      </button>
      <div className="song-info">
        <p className="song-title">{title}</p>
        <a className="song-links" href="">
          Links
        </a>
      </div>
    </div>
  );
}
MusicTrackCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  artwork: PropTypes.string,
  src: PropTypes.string,
  links: PropTypes.objectOf(PropTypes.string),
};
export default MusicTrackCard;
