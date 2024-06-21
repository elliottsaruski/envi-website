import { useState, useRef } from "react";
import myTracks from "../../data/MusicData.jsx";

import artworkThumbnailPlaceholder from "../../assets/music/artworks/previousReleasesCover.jpg";
function AudioPlayer() {
  const [artworkThumbnail, setArtworkThumbnail] = useState(
    artworkThumbnailPlaceholder
  );
  const [audioSrc, setAudioSrc] = useState();
  const [songTitle, setSongTitle] = useState("Select a Track!");
  const [albumTitle, setAlbumTitle] = useState("album");
  const [filter, setFilter] = useState("SHOW ALL");
  const [filterBarOpen, setFilterBarOpen] = useState(false);
  const albums = ["RETURN", "Previous Releases", "Ghost Love", "Heds Tapes"];
  const audioRef = useRef();

  return (
    <>
      <div className="audio-player-left">
        <div className="album-wrapper">
          <div
            className="album-folders-header"
            onClick={() => setFilterBarOpen(!filterBarOpen)}>
            <p>
              filter album: {"'"}
              {filter}
              {"'"}
            </p>
            {filterBarOpen ? (
              <span className="dropdown-icon">&#10005;</span>
            ) : (
              <span className="dropdown-icon">&#8628;</span>
            )}
          </div>
          {/* filter bar */}
          <div
            className={
              filterBarOpen ? "album-folders" : "album-folders-closed"
            }>
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
        </div>

        <img src={artworkThumbnail} alt="song artwork" />
        <div id="now-playing-details">
          <h4>{albumTitle}</h4>
          <h3>{songTitle}</h3>
          <h4>envi</h4>
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
    </>
  );
}

export default AudioPlayer;
