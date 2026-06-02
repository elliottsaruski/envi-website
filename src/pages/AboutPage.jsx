import { imageUrl } from "../utils/cloudinary";

function AboutPage() {
  return (
    <section className="about--wrapper">
      <h2>About</h2>
      <div className="about-content">
        <div className="spans">
          <img
            src={imageUrl("envi-mayfest-actionshot_lx2q4i")}
            aria-description="an action shot of a dj performing"
            alt="enviIMG"
          />
          <span className="about--span">
            Born and raised in Miami, FL, envi, aka Elliott Saruski, is an
            electronic music producer, multi-media nerd, and front-end dev. His
            sound is characterized by heavy bass, melodic synths, and unique
            melodies.
          </span>
          <img
            src={imageUrl("envi-text-md_t3dupt")}
            aria-description="3d text of the artist name envi"
            alt="enviIMG"
          />
          <span className="about--span">
            After learning VirtualDJ at age 11 and developing a deep passion for
            music, Elliott became enamoured with music technology and the art of
            creating sounds.
          </span>
          <img
            src={imageUrl("ENVI_press-photo_lwg5ix")}
            aria-description="portrait of artist envi"
            alt="enviIMG"
          />
          <span className="about--span">
            5 years later, he launches his first project via soundcloud under
            the name {"ruski"}. Later releasing music under the name {"null"}.
            Fast forward a year and the project transforms into {"'envi'"}.
          </span>
          <img
            src={imageUrl("envi-text-2_femmkn")}
            aria-description="3d text of the artist name envi"
            alt="enviIMG"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
