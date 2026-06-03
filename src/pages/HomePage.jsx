import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imageUrl } from "../utils/cloudinary";

const NAV_LINKS = [
  { to: "/music",     label: "MUSIC" },
  { to: "/media",     label: "MEDIA" },
  { to: "/resources", label: "RESOURCES" },
];

function HomePage() {
  return (
    <div className="bg-bg">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden grain">
        {/* Full-bleed background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageUrl("envi-text-md_t3dupt")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.28) contrast(1.1)",
          }}
          aria-hidden
        />

        {/* Radial glow behind text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(0,212,232,0.07) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        {/* Content — bottom-left */}
        <div className="relative z-10 flex flex-col h-full px-8 md:px-12 pb-12 md:pb-16 justify-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
          >
            ELECTRONIC MUSIC · MIAMI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display font-black uppercase leading-none tracking-tight text-[12vw] text-text select-none"
          >
            ENVI
          </motion.h1>
        </div>

        {/* CTA — bottom-right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-12 md:bottom-16 right-8 md:right-12 z-10"
        >
          <Link
            to="/music"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            LATEST: RETURN EP ↗
          </Link>
        </motion.div>
      </section>

      {/* ── Nav links scroll section ──────────────────────────────────── */}
      <section className="border-t border-[#252525]">
        {NAV_LINKS.map(({ to, label }, i) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          >
            <Link
              to={to}
              className="group flex items-center gap-5 border-b border-[#252525] px-8 md:px-12 py-8 md:py-10"
            >
              <span className="w-[2px] h-7 bg-accent shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="font-display font-bold uppercase text-4xl md:text-5xl text-text group-hover:text-accent transition-colors duration-200">
                {label}
              </span>
              <span className="ml-auto font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors">
                ↗
              </span>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
