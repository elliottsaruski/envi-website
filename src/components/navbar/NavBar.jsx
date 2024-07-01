import { NavLink } from "react-router-dom";
import Footer from "../Footer.jsx";
import Links from "../Links.jsx";
import MobileNav from "./MobileNav.jsx";

function NavBar() {
  return (
    <div className="nav-wrapper">
      {/* --------------------------------------Mobile Nav---------------------------------- */}
      <MobileNav />

      {/* --------------------------------------Normal Nav---------------------------------- */}
      <NavLink to="/home">
        <h1 className="logo--nav">ENVI</h1>
      </NavLink>
      <hr />

      <nav className="nav-normal">
        <NavLink to="/music" className="navItem">
          MUSIC
        </NavLink>
        <NavLink to="/media" className="navItem">
          MEDIA
        </NavLink>
        <NavLink to="/about" className="navItem">
          ABOUT
        </NavLink>
        <NavLink to="/musicresources" className="navItem">
          RESOURCES
        </NavLink>
      </nav>
      <div className="navbar-links-only-desktop">
        <Links />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default NavBar;
