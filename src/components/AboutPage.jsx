import enviMAYFESTphoto from "../assets/envi-mayfest-actionshot.jpg";

function AboutPage() {
  return (
    <section className="about--wrapper">
      <img
        className="envi-img-mayfest"
        src={enviMAYFESTphoto}
        alt="envi MAYFEST photo - envi DJing"
      />
      <div className="about-content">
        <h2>About</h2>
        <div className="spans">
          <span className="about--span">
            Born and raised in Miami, FL, envi, aka Elliott Saruski, is an
            electronic music producer, multi-media nerd, and front-end dev. His
            sound is characterized by heavy bass, melodic synths, and unique
            melodies. Loves all music but is currently in a dnb phase.
          </span>
          {/* <span className="about--span">
            Born and raised in Miami, FL, envi, aka Elliott Saruski, is an
            electronic music producer, multi-media nerd, and front-end dev. His
            sound is characterized by heavy bass, melodic synths, and unique
            melodies. Loves all music but is currently in a dnb phase.
          </span> */}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
