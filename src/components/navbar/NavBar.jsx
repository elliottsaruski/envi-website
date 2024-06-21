import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import Links from "../Links.jsx";
import MobileNav from "./MobileNav.jsx";

function NavBar() {
  return (
    <div className="nav-wrapper">
      {/* --------------------------------------Mobile Nav---------------------------------- */}
      <MobileNav />

      {/* --------------------------------------Normal Nav---------------------------------- */}
      <nav className="nav-normal">
        <Link to="/" className="logo--nav">
          <h1>ENVI</h1>
        </Link>
        <div className="nav-items-right">
          <Link to="/music" id="music-nav-tab" className="music--nav navItem">
            <p>MUSIC</p>
          </Link>
          <Link to="/media" id="media-nav-tab" className="media--nav navItem">
            <p>MEDIA</p>
          </Link>
          <Link to="/about" id="about-nav-tab" className="about--nav navItem">
            <p>ABOUT</p>
          </Link>
          <Link
            to="/musicresources"
            id="music-resources-nav-tab"
            className="media--nav navItem">
            <p>MUSIC RESOURCES</p>
          </Link>
        </div>
      </nav>
      <div className="navbar-links-only-desktop">
        <Links />
      </div>
      <Footer />
    </div>
  );
}

export default NavBar;
