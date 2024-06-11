import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";

function NavBar() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const VAR = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "50%",
      },
    },
    nav: {
      opened: { opacity: 1, x: 0 },
      close: { opacity: 0, x: "-100%" },
    },
    navItem: {
      opened: {
        opacity: 1,
        x: 0,
        transition: {
          staggerChildren: 1,
          duration: 0.75,
          type: "ease",
        },
      },
      close: { opacity: 0, x: -1000 },
    },
  };

  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}>
        <motion.div className="mobile-menu-wrapper">
          {/* --------------------------------------Nav hamburger---------------------------------- */}
          <Link to="/" className="mobile-logo--nav">
            <h1>ENVI</h1>
          </Link>
          <motion.button
            initial={false}
            className="mobile-menu-button"
            onClick={() => {
              setHamburgerMenuOpen((prev) => !prev);
            }}
            animate={hamburgerMenuOpen ? "open" : "closed"}>
            <motion.span
              style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              variants={VAR.top}
              className="ham-top"></motion.span>
            <motion.span
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              variants={VAR.middle}
              className="ham-mid"></motion.span>
            <motion.span
              style={{
                x: "-50%",
                y: "50%",
                bottom: "35%",
                left: "50%",
              }}
              variants={VAR.bottom}
              className="ham-bottom"></motion.span>
          </motion.button>
          <AnimatePresence>
            <motion.nav
              animate={hamburgerMenuOpen ? "opened" : "close"}
              variants={VAR.nav}
              className={hamburgerMenuOpen ? "nav-mobile-open" : "displayNone"}>
              <Link to="/music">
                <motion.p variants={VAR.navItem}>MUSIC</motion.p>
              </Link>
              <Link to="/media">
                <motion.p variants={VAR.navItem}>MEDIA</motion.p>
              </Link>
              <Link to="/about">
                <motion.p variants={VAR.navItem}>ABOUT</motion.p>
              </Link>
              <Link to="/contact">
                <motion.p variants={VAR.navItem}>MUSIC RESOURCES</motion.p>
              </Link>
            </motion.nav>
          </AnimatePresence>
        </motion.div>
      </MotionConfig>
      {/* --------------------------------------Nav normal---------------------------------- */}

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
    </>
  );
}

export default NavBar;
