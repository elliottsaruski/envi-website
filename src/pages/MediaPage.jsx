import ReturnEP from "../components/media-page/ReturnEP";
import OtherArt from "../components/media-page/OtherArt";
import BlenderChallenge from "../components/media-page/BlenderChallenge.jsx";

function MediaPage() {
  return (
    <section className="media--wrapper">
      {/* MAIN HEADING */}
      <h2>Media</h2>

      {/* RETURN EP SECTION */}
      <ReturnEP />
      <hr />

      {/* ART SECTION */}
      <OtherArt />
      <hr />

      {/* BLENDER CHALLENGE SECTION */}
      <BlenderChallenge />
    </section>
  );
}

export default MediaPage;
