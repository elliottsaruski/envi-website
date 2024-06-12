import { useState, useRef } from "react";
import myTracks from "../data/MusicData";

import enviActionShot from "../assets/envi-mayfest-actionshot.jpg";

function MusicPage() {
  const [artworkThumbnail, setArtworkThumbnail] = useState(enviActionShot);
  const [audioSrc, setAudioSrc] = useState();
  const [songTitle, setSongTitle] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");

  // const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef();

  return (
    <div id="audioplayer">
      <div className="audio-player-left">
        <img src={artworkThumbnail} alt="song artwork" />
        <div id="now-playing-details">
          <h3>{albumTitle}</h3>
          <h2>{songTitle}</h2>
          <h3>envi</h3>
        </div>
        <audio
          ref={audioRef}
          controls
          controlsList="noplaybackrate nodownload"
          autoPlay
          src={audioSrc}></audio>
      </div>
      <div className="table-wrapper">
        <table className="music-list">
          <tbody>
            {myTracks.map((track) => {
              return (
                <tr
                  className="table-track-row"
                  key={track.id}
                  id="table-item"
                  onClick={() => {
                    setArtworkThumbnail(track.artwork);
                    setAudioSrc(track.src);
                    setSongTitle(track.title);
                    setAlbumTitle(track.album);
                    // setIsAudioPlaying(true);
                  }}>
                  <td>
                    <img
                      src={track.artwork}
                      alt="track-artwork-thumbnail"
                      id="track-artwork-thumbnail"
                    />
                  </td>
                  <td id="track-details">
                    <p id="track-title">{track.title}</p>
                    <p id="track-album">{track.album}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MusicPage;
