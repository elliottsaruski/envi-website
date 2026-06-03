const socials = [
  { label: "SPOTIFY",     href: "https://open.spotify.com/artist/5AHQFsTiqO7W3E2OEEUaX7?si=ghRK6Ve1TaCkHNM-kxacFw" },
  { label: "SOUNDCLOUD",  href: "https://soundcloud.com/envimusic" },
  { label: "X",           href: "" },
  { label: "INSTAGRAM",   href: "https://instagram.com/elliottsaruski" },
  { label: "APPLE MUSIC", href: "https://music.apple.com/us/artist/envi/1455988941" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#252525] px-6 py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto">
        <p className="font-display font-black uppercase leading-none tracking-tight text-[8vw] text-text mb-8 select-none">
          ENVI
        </p>

        <div className="flex flex-wrap gap-6 mb-8">
          {socials.map(({ label, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
              >
                {label} ↗
              </a>
            ) : (
              <span
                key={label}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground/30"
              >
                {label} ↗
              </span>
            )
          )}
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground/50">
          © 2026 ELLIOTT SARUSKI. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
