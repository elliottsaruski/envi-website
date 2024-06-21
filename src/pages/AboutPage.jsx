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
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
