import { useState, useRef } from "react";
import myTracks from "../data/MusicData";

import artworkThumbnailPlaceholder from "../assets/music/artworks/previousReleasesCover.jpg";

function MusicPage() {
  const [artworkThumbnail, setArtworkThumbnail] = useState(
    artworkThumbnailPlaceholder
  );
  const [audioSrc, setAudioSrc] = useState();
  const [songTitle, setSongTitle] = useState("Select a Track!");
  const [albumTitle, setAlbumTitle] = useState("album");

  const [filter, setFilter] = useState("SHOW ALL");

  const albums = ["RETURN", "Previous Releases", "Ghost Love", "Heds Tapes"];
  // const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef();

  return (
    <section id="audioplayer">
      <div className="audio-player-left">
        <div className="album-wrapper">
          <div className="album-folders-header">
            <p>
              selected: {"'"}
              {filter}
              {"'"}
            </p>
          </div>
          {albums.map((album) => {
            return (
              <div
                id="album-folder"
                key={album}
                onClick={() => setFilter(album)}>
                {/* -------- ALBUM TEXT FOR FOLDER ----------- */}
                {album}
              </div>
            );
          })}
          <p onClick={() => setFilter("SHOW ALL")}>SHOW ALL</p>
        </div>
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
            {myTracks
              .filter((track) => {
                if (track.album === filter) return track;
                else if (filter === "SHOW ALL") return myTracks;
              })
              .map((track) => {
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
                    {/* <td>
                        <img
                          src={track.artwork}
                          alt="track-artwork-thumbnail"
                          id="track-artwork-thumbnail"
                        />
                      </td> */}
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
    </section>
  );
}

export default MusicPage;

// {myTracks.forEach((track) => {
//   const album = track.album;
// if (album === "RETURN"){}
// })}

{
  /* <div className="album"></div>
<div className="album"></div>
<div className="album"></div>
<div className="album"></div> */
}
