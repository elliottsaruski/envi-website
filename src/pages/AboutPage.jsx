import { motion } from "framer-motion";
import { imageUrl } from "../utils/cloudinary";

const socials = [
  { label: "SPOTIFY",     href: "https://open.spotify.com/artist/5AHQFsTiqO7W3E2OEEUaX7?si=ghRK6Ve1TaCkHNM-kxacFw" },
  { label: "SOUNDCLOUD",  href: "https://soundcloud.com/envimusic" },
  { label: "INSTAGRAM",   href: "https://instagram.com/elliottsaruski" },
  { label: "APPLE MUSIC", href: "https://music.apple.com/us/artist/envi/1455988941" },
];

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]"
    >
      {/* ── Left: Full-height image ───────────────────────────────────── */}
      <div className="md:w-[45%] h-[50vh] md:h-auto md:sticky md:top-16 md:self-start shrink-0 overflow-hidden">
        <img
          src={imageUrl("envi-text-md_t3dupt")}
          alt="ENVI 3D render"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Right: Bio content ────────────────────────────────────────── */}
      <div className="md:w-[55%] px-8 md:px-14 py-16 md:py-24 flex flex-col justify-center gap-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          ABOUT ENVI
        </p>

        <h1 className="font-display font-black uppercase leading-tight text-4xl md:text-6xl text-text">
          Electronic producer from Miami.
        </h1>

        <div className="flex flex-col gap-5 font-mono text-sm text-text/75 leading-relaxed max-w-lg">
          <p>
            Born and raised in Miami, FL, envi — aka Elliott Saruski — is an
            electronic music producer, multi-media nerd, and front-end dev. His
            sound is characterized by heavy bass, melodic synths, and unique
            melodies.
          </p>
          <p>
            After learning VirtualDJ at age 11 and developing a deep passion for
            music, Elliott became enamoured with music technology and the art of
            creating sounds.
          </p>
          <p>
            5 years later, he launched his first project via SoundCloud under the
            name <em className="not-italic text-text/90">ruski</em>, later releasing
            music as <em className="not-italic text-text/90">null</em>. Fast forward
            a year and the project transforms into{" "}
            <em className="not-italic text-accent">envi</em>.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-6 pt-2">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
