// eslint-disable-next-line react/prop-types
function AlbumFilter({ albums, filter, setFilter }) {
  return (
    <div className="album-wrapper">
      <div className="album-folders-header">
        <p>filter by album</p>
      </div>
      {/* filter bar */}
      <div className="album-folders">
        {/* eslint-disable-next-line react/prop-types */}
        {albums.map((album) => {
          return (
            <div id="album-folder" key={album} onClick={() => setFilter(album)}>
              {/* -------- ALBUM TEXT FOR FOLDER ----------- */}
              <p className={filter === album ? "active-album" : "album-text"}>
                {album}
              </p>
            </div>
          );
        })}
        <p onClick={() => setFilter("SHOW ALL")} id="show-all">
          SHOW ALL
        </p>
      </div>
    </div>
  );
}

export default AlbumFilter;
