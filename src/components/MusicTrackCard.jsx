import PropTypes from "prop-types";

function MusicTrackCard({ title, album }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{album}</td>
    </tr>
  );
}
MusicTrackCard.propTypes = {
  title: PropTypes.string,
  album: PropTypes.string,
};
export default MusicTrackCard;
