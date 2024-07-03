import { Link } from "react-router-dom";
// import enviIMG from "../assets/imgs/envi-mayfest-actionshot.jpg";
import { FiMusic } from "react-icons/fi";
import { GrMultimedia } from "react-icons/gr";
import { BsInfoSquare } from "react-icons/bs";
import { TbFileMusic } from "react-icons/tb";

function HomePage() {
  return (
    <section id="home-page-wrapper">
      {/* <div className="home-page-img-wrapper">
        <img
          src={enviIMG}
          aria-description="A DJ (envi) playing music behind a stage in the woods."
          alt="enviIMG"
        />
      </div> */}
      <div className="home-page-content">
        <div className="home-page-greeting">
          <p>
            {" "}
            Hiya! I{"'"}m envi! <br /> Welcome to my site!
          </p>
        </div>
        <div className="home-page-links">
          <Link to={"/music"}>
            <FiMusic />
            music
          </Link>
          <Link to={"/media"}>
            <GrMultimedia />
            media
          </Link>
          <Link to={"/about"}>
            <BsInfoSquare />
            about
          </Link>
          <Link to={"/resources"}>
            <TbFileMusic />
            resources
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
