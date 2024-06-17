import { Tweet } from "react-tweet";

import blenderChallenge from "../data/media/blender-challenge/blender-chal-data";
import otherMedia from "../data/media/other-media/other-media-data.jsx";
// import returnAnimations from "../data/media/RETURNep/returnEP-data.jsx";
// import returnImages from "../data/media/RETURNep/returnEP-data.jsx";

function MediaPage() {
  const otherMediaList = otherMedia.map((media) => {
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
        <iframe
          key={media.id}
          src={`https://drive.google.com/file/d/${media.src}/preview`}
          alt={media.id}
          className="branding-video"
          // controls
        />
      );
    }
  });

  return (
    <section className="media--wrapper">
      <h2>Media</h2>
      <div className="media-section">
        <div className="media-title-span">
          <h3>RETURN EP</h3>
          {/* <span>This EP was released....</span> */}
        </div>
        <div className="media-CONTENT-promo">
          {/* display branding and promo material */}
        </div>
      </div>
      <hr />
      <div className="media-section">
        <div className="media-title-span">
          <h3>Other Work & Experiments</h3>
          <span>
            I find pleasure in creating every aspect of this project. Whether
            that be mixing/mastering, art direction, or simply promotional
            materials, you can find me adopting new softwares - or relying on
            ones I am familiar with - to define how the listener might{" "}
            <em>SEE</em> my music.
          </span>
        </div>
        <div className="media-CONTENT-other">
          {/* display other work material */}
          {otherMediaList}
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
    </section>
  );
}

export default MediaPage;
