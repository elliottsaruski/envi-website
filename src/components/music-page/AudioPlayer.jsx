import { useState, useRef } from "react";
import myTracks from "../../data/MusicData.jsx";

import artworkThumbnailPlaceholder from "../../assets/music/artworks/previousReleasesCover.jpg";
import AlbumFilter from "./AlbumFilter.jsx";
function AudioPlayer() {
  const [artworkThumbnail, setArtworkThumbnail] = useState(
    artworkThumbnailPlaceholder
  );
  const [audioSrc, setAudioSrc] = useState();
  const [songTitle, setSongTitle] = useState("Select a Track!");
  const [albumTitle, setAlbumTitle] = useState("-");
  const [filter, setFilter] = useState("SHOW ALL");
  const albums = ["RETURN", "Previous Releases", "Ghost Love", "Heds Tapes"];
  const audioRef = useRef();

  return (
    <>
      <div className="audio-player-left">
        <h2>music</h2>
        <div className="artwork-wrapper">
          <img src={artworkThumbnail} alt="song artwork" />
        </div>
        <div className="now-playing-text">
          <h4>{albumTitle}</h4>
          <h3>{songTitle}</h3>
          <h4>envi</h4>
        </div>
        {/* <div id="now-playing-details"> */}
        {/* </div> */}
        <audio
          ref={audioRef}
          controls
          controlsList="noplaybackrate nodownload"
          autoPlay
          src={audioSrc}></audio>
      </div>

      <div className="filter-and-music-list-wrapper">
        <div className="album-filter-wrapper">
          <AlbumFilter filter={filter} setFilter={setFilter} albums={albums} />
        </div>
        <div className="music-list-wrapper">
          {myTracks
            .filter((track) => {
              if (track.album === filter) return track;
              else if (filter === "SHOW ALL") return myTracks;
            })
            .map((track) => {
              return (
                <div
                  className="track-card"
                  key={track.key}
                  onClick={() => {
                    setArtworkThumbnail(track.artwork);
                    setAudioSrc(track.src);
                    setSongTitle(track.title);
                    setAlbumTitle(track.album);
                    // setIsAudioPlaying(true);
                  }}>
                  <img src={track.artwork} alt="track-artwork-thumbnail" />
                  <div className="track-details">
                    <p>{track.title}</p>
                    {/* <p>{track.album}</p> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default AudioPlayer;
