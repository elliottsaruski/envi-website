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
    <div id="full-music-page">
      <div className="audio-player-np-img">
        <img src={artworkThumbnail} alt="" />
        <div id="audio-player">
          <div id="now-playing-details">
            <h3>{albumTitle}</h3>
            <h2>{songTitle}</h2>
            <h3>envi</h3>
          </div>
          <audio ref={audioRef} controls autoPlay src={audioSrc}></audio>
          {/* <button>prev</button>
          <button
            onClick={() => {
              isAudioPlaying
                ? audioRef.current.pause() + setIsAudioPlaying(false)
                : audioRef.current.play() + setIsAudioPlaying(true);
            }}>
            play
          </button>
          <button>next</button> */}
        </div>
      </div>

      <table className="music-list">
        {myTracks.map((track) => {
          return (
            <tbody
              key={track.id}
              id="table-item"
              onClick={() => {
                setArtworkThumbnail(track.artwork);
                setAudioSrc(track.src);
                setSongTitle(track.title);
                setAlbumTitle(track.album);
                // setIsAudioPlaying(true);
                window.scrollTo(0, 100);
              }}>
              <tr className="table-track-row">
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
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default MusicPage;
