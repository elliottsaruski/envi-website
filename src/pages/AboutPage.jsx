import enviIMG from "../assets/envi-mayfest-actionshot.jpg";

function AboutPage() {
  return (
    <section className="about--wrapper">
      <h2>About</h2>
      <div className="about-content">
        <img
          src={enviIMG}
          aria-description="A DJ (envi) playing music behind a stage in the woods."
          alt="enviIMG"
        />
        <div className="spans">
          <span className="about--span">
            Born and raised in Miami, FL, envi, aka Elliott Saruski, is an
            electronic music producer, multi-media nerd, and front-end dev. His
            sound is characterized by heavy bass, melodic synths, and unique
            melodies. Loves all music but is currently in a dnb phase.
          </span>
          <br />
          <span className="about--span">
            After learning VirtualDJ at age 11 and developing a deep passion for
            music, Elliott became enamoured with music technology and the art of
            creating sounds.
          </span>
          <br />
          <span className="about--span">
            5 years later, he launches his first project via soundcloud under
            the name {"ruski"}. The project involved basic sample manipulation
            with a future-bass sound. A few years later and he starts uploading
            music under the name {"null"}, during the height of the underground
            electornic music scene on soundcloud. Though never releasing with a
            collective or label, {"null"} garnered a small following.
          </span>
          <br />
          <span className="about--span">
            Fast forward a year or two, and the null project transforms into{" "}
            {"'envi'"}.
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
