import { Link } from "react-router-dom";
import { imageUrl } from "../utils/cloudinary";

function HomePage() {
  return (
    <section id="home-page-wrapper">
      <div className="home-page-img-wrapper">
        <img
          src={imageUrl("envi-text-md_t3dupt")}
          aria-description="3d text of the artist name envi"
          alt="enviIMG"
        />
      </div>
      <div className="home-page-content">
        <div className="home-page-greeting">
          <p> Hi! I{"'"}m envi!</p>
        </div>
        <div className="home-page-links">
          <Link to={"/music"}>music</Link>
          <Link to={"/media"}>media</Link>
          <Link to={"/about"}>about</Link>
          <Link to={"/resources"}>resources</Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
