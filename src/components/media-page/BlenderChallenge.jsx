import { Tweet } from "react-tweet";
import blenderChallenge from "../../data/media/blender-challenge/blender-chal-data.jsx";

function BlenderChallenge() {
  return (
    <div className="media-section">
      <div className="media-title-span">
        <h3>31 Day Blender 3D Challenge</h3>
        <span>
          The goal here was to enter a state exposure therapy while
          simulatneously practicing a new-ish software. Imposter syndrome,
          social criticism, perfectionism, and creative-blocks, all contributing
          to a self I did not respect as an artist. This exercise taught me the
          power of setting creative limitations - including time restraints -
          and overcoming the fear of the <em>social</em> side of being an
          artist, that being the aspect of sharing work with the world, hence
          the posting on Twitter/X.
        </span>
      </div>
      <div className="media-CONTENT-tweets">
        {/* display 31 Day Blender 3D Challenge material */}
        {blenderChallenge.map((tweet) => {
          return <Tweet key={tweet.id} id={tweet.src} />;
        })}
      </div>
    </div>
  );
}

export default BlenderChallenge;
