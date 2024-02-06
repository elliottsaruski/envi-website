import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <>
      <div className="mobile-menu-wrapper">
        {/* --------------------------------------Nav hamburger---------------------------------- */}
        <Link to="/" className="mobile-logo--nav">
          ENVI
        </Link>
        <button
          className="mobile-menu-button"
          onClick={() => {
            setHamburgerMenuOpen(!hamburgerMenuOpen);
          }}
        >
          <span className="ham-top"></span>
          <span className="ham-mid"></span>
          <span className="ham-bottom"></span>
        </button>

        <nav className={hamburgerMenuOpen ? 'nav-mobile-open' : 'displayNone'}>
          <Link to="/music">
            <p>MUSIC</p>
          </Link>
          <Link to="/media">
            <p>MEDIA</p>
          </Link>
          <Link to="/about">
            <p>ABOUT</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT</p>
          </Link>
        </nav>
      </div>

      {/* --------------------------------------Nav normal---------------------------------- */}

      <nav className="nav-normal">
        <Link to="/" className="logo--nav">
          ENVI
        </Link>
        <section className="nav-items-left--wrapper">
          <Link to="/music" id="music-nav-tab" className="music--nav navItem">
            <p>MUSIC</p>
          </Link>
          <Link to="/media" id="media-nav-tab" className="media--nav navItem">
            <p>MEDIA</p>
          </Link>
        </section>
        <section className="nav-items-right--wrapper">
          <Link to="/about" id="about-nav-tab" className="about--nav navItem">
            <p>ABOUT</p>
          </Link>
          <Link
            to="/contact"
            id="contact-nav-tab"
            className="media--nav navItem"
          >
            <p>CONTACT</p>
          </Link>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
