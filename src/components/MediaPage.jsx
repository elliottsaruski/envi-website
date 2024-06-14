import { Tweet } from "react-tweet";

import blenderChallenge from "../data/media/blender-challenge/blender-chal-data";
import brandingMedia from "../data/media/branding/branding-data.jsx";

function MediaPage() {
  const mediaList = brandingMedia.map((media) => {
    if (media.mediaType === "image") {
      return (
        <img
          key={media.id}
          src={`https://drive.google.com/thumbnail?id=${media.src}&sz=w1000`}
          alt={media.id}
          className="branding-image"
        />
      );
    } else if (media.mediaType === "video") {
      return (
        <video
          key={media.id}
          // src={`https://drive.google.com/uc?id=${media.src}/`}
          alt={media.id}
          className="branding-video"
          controls
        />
      );
    }
  });
  return (
    <section className="media--wrapper">
      <h2>MEDIA</h2>
      <div className="media-section">
        <div className="media-title-span">
          <h3>Branding & Promotional</h3>
          <span>
            I find pleasure in creating every aspect of this project. Whether
            that be mixing/mastering, art direction, or simply promotional
            materials, you can find me adopting new softwares - or relying on
            ones I am familiar with - to define how the listener might{" "}
            <em>SEE</em> my music.
          </span>
        </div>
        <div className="media-CONTENT-promo">
          {/* display branding and promo material */}

          {mediaList}
        </div>
      </div>
      <hr />
      <div className="media-section">
        <div className="media-title-span">
          <h3>31 Day Blender 3D Challenge</h3>
          <span>
            The goal here was to enter a state exposure therapy while
            simulatneously practicing a new-ish software. Imposter syndrome,
            social criticism, perfectionism, and creative-blocks, all
            contributing to a self I did not respect as an artist. This exercise
            taught me the power of setting creative limitations - including time
            restraints - and overcoming the fear of the <em>social</em> side of
            being an artist, that being the aspect of sharing work with the
            world, hence the posting on Twitter/X.
          </span>
        </div>
        <div className="media-CONTENT-tweets">
          {/* display 31 Day Blender 3D Challenge material */}
          {blenderChallenge.map((tweet) => {
            return <Tweet key={tweet.id} id={tweet.src} />;
          })}
        </div>
      </div>
      <hr />
      <div className="media-section">
        <div className="media-title-span">
          <h3>Other Work & Experiments</h3>
          <span>other work</span>
        </div>
        <div className="media-CONTENT">{/* display other work material */}</div>
      </div>
    </section>
  );
}

export default MediaPage;
