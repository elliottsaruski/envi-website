import { useRef } from "react";

function OtherArt() {
  const otherArtRef = useRef();

  return (
    <div className="media-section">
      <div className="media-title-span">
        <h3>Other Art</h3>
        <span>
          I find pleasure in creating every aspect of this project. Whether that
          be mixing/mastering, art direction, or simply promotional materials,
          you can find me adopting new softwares - or relying on ones I am
          familiar with - to define how the listener might <em>SEE</em> my
          music.
        </span>
      </div>
      <div className="media-CONTENT-other" ref={otherArtRef}>
        {/* display other work material */}
      </div>
    </div>
  );
}

export default OtherArt;
