import myTracks from "../data/MusicData";
import MusicTrackCard from "./MusicTrackCard";

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
    <section id="full-music-page">
      {/* --------------------RENDER LIST OF TRACKS ------------*/}
      <div className="music--wrapper">{musicList}</div>
    </section>
  );
}

export default MusicPage;
