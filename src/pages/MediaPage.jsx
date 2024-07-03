import { useRef } from "react";

import ReturnEP from "../components/media-page/ReturnEP";
import OtherArt from "../components/media-page/OtherArt";
import BlenderChallenge from "../components/media-page/BlenderChallenge.jsx";

function MediaPage() {
  const mediaPageRef = useRef(null);

  const handleScrollToTop = () => {
    if (mediaPageRef.current) {
      mediaPageRef.current.scrollTop = 0;
    }
  };
  return (
    <section className="media--wrapper" ref={mediaPageRef}>
      {/* MAIN HEADING */}
      <h2 id="title-for-media">Media</h2>

      {/* RETURN EP SECTION */}
      <ReturnEP />
      <hr />

      {/* ART SECTION */}
      <OtherArt />
      <hr />

      {/* BLENDER CHALLENGE SECTION */}
      <BlenderChallenge />
      <button className="scroll-to-top-button" onClick={handleScrollToTop}>
        to top
      </button>
    </section>
  );
}

export default MediaPage;
