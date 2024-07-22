import enviTextIMG from "../assets/imgs/envi-text-md.png";
import envidjIMG from "../assets/imgs/envi-mayfest-actionshot.jpg";
import envipressphoto from "../assets/imgs/ENVI press-photo.jpg";
import envitext2 from "../assets/imgs/envi-text-2.png";

function AboutPage() {
  return (
    <section className="about--wrapper">
      <h2>About</h2>
      <div className="about-content">
        <div className="spans">
          <img src={envidjIMG} aria-description="" alt="enviIMG" />
          <span className="about--span">
            Born and raised in Miami, FL, envi, aka Elliott Saruski, is an
            electronic music producer, multi-media nerd, and front-end dev. His
            sound is characterized by heavy bass, melodic synths, and unique
            melodies.
          </span>
          <img src={enviTextIMG} aria-description="" alt="enviIMG" />
          <span className="about--span">
            After learning VirtualDJ at age 11 and developing a deep passion for
            music, Elliott became enamoured with music technology and the art of
            creating sounds.
          </span>
          <img src={envipressphoto} aria-description="" alt="enviIMG" />

          <span className="about--span">
            5 years later, he launches his first project via soundcloud under
            the name {"ruski"}. Later releasing music under the name {"null"}.
            Fast forward a year and the project transforms into {"'envi'"}.
          </span>
          <img src={envitext2} aria-description="" alt="enviIMG" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
