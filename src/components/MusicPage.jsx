import myTracks from "../data/MusicData";
import MusicTrackCard from "./MusicTrackCard";

function MusicPage() {
  const musicList = myTracks.map((track) => {
    return (
      <MusicTrackCard
        key={track.key}
        id={track.id}
        title={track.title}
        album={track.album}
        artwork={track.artwork}
        src={track.src}
      />
    );
  });

  return (
    <section id="full-music-page">
      <img src="" alt="" />
      <table className="music-list">
        <tr>
          <th>Song</th>
          <th>Album</th>
        </tr>
        {musicList}
      </table>
    </section>
  );
}

export default MusicPage;
