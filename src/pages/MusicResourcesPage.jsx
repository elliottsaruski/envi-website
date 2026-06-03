import { motion } from "framer-motion";
import { imageUrl } from "../utils/cloudinary";

function MusicResourcesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-8 md:px-12 py-16 md:py-24"
    >
      {/* Page header */}
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        RESOURCES
      </p>
      <h1 className="font-display font-black uppercase leading-none text-6xl md:text-8xl text-text mb-16 md:mb-24">
        FREE TOOLS
      </h1>

      <div className="flex flex-col gap-16">
        {/* Presets */}
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            PRESETS
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://envimusic.gumroad.com/l/vitalpresetsbyenvi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-56 overflow-hidden ring-1 ring-[#252525] hover:ring-accent/50 transition-all"
            >
              <img
                src={imageUrl("resources/vitalpresets")}
                alt="Vital Presets by ENVI"
                className="w-full aspect-square object-cover mix-blend-luminosity opacity-70 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/90 to-transparent">
                <p className="font-mono text-[10px] uppercase tracking-widest text-text">
                  VITAL PRESETS
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent mt-0.5">
                  FREE ↗
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Sample Packs */}
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            SAMPLE PACKS
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="w-56 aspect-square border border-dashed border-[#252525] flex flex-col items-center justify-center gap-3 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 text-center">
                COMING SOON
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/25 text-center">
                SAMPLE PACKS
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default MusicResourcesPage;
