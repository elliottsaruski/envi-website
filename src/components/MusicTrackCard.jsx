import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function MusicTrackCard({ id, title, artwork, src }) {
  return (
    <motion.div
      layout
      style={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "ease" }}
      className="card"
      id={id}>
      <motion.img className="song-artwork" src={artwork} alt="song cover" />
      <audio className="song-audio-src" src={src} />
      <motion.button className="play-song-button">
        <FaPlay className="faplay" style={{ scale: "5" }} />
      </motion.button>
      <motion.div className="song-info">
        <p className="song-title">{title}</p>
        <a className="song-links" href="">
          Links
        </a>
      </motion.div>
    </motion.div>
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
