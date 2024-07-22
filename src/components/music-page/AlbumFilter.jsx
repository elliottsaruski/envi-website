import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function AlbumFilter({ albums, filter, setFilter }) {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <>
      <button
        id="filter-button"
        onClick={() => {
          setFilterOpen(!filterOpen);
        }}>
        album filter: <em>{filter}</em>
        <IoIosArrowUp className={filterOpen ? "arrow-up" : "arrow-down"} />
      </button>
      <div className={filterOpen ? "album-wrapper" : "album-wrapper-closed"}>
        <div className="album-folders">
          {/* eslint-disable-next-line react/prop-types */}
          {albums.map((album) => {
            return (
              <div
                id="album-folder"
                key={album}
                onClick={() => setFilter(album)}>
                {/* -------- ALBUM TEXT FOR FOLDER ----------- */}
                <p className={filter === album ? "active-album" : "album-text"}>
                  {album}
                </p>
              </div>
            );
          })}
        </div>
        <button onClick={() => setFilter("SHOW ALL")} id="show-all">
          <p
            className={
              filter === "SHOW ALL" ? "show-all-active" : "show-all-inactive"
            }>
            SHOW ALL
          </p>
        </button>
      </div>
    </>
  );
}

export default AlbumFilter;
