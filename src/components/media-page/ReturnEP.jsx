import { motion } from "framer-motion";
import returnEPData from "../../data/media/RETURNep/returnEP-data";
import { imageUrl } from "../../utils/cloudinary";

function ReturnEP() {
  return (
    <section>
      {/* Section label + description */}
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
          RETURN EP — {returnEPData.returnAnimations.length} ANIMATIONS
        </p>
        <p className="font-mono text-sm text-text/70 max-w-md leading-relaxed">
          My latest release features 6 animations made in Blender 3D and
          composited in DaVinci Resolve.
        </p>
      </div>

      {/* Featured hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-8 w-full max-w-xs overflow-hidden ring-1 ring-[#252525]"
      >
        <img
          src={imageUrl("RETURN_art_kcwz8d")}
          alt="RETURN EP artwork"
          className="w-full aspect-square object-cover"
        />
      </motion.div>

      {/* Embed grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {returnEPData.returnAnimations.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-surface ring-1 ring-[#252525] hover:ring-accent/40 transition-all overflow-hidden"
          >
            <iframe
              width="100%"
              style={{ aspectRatio: "9/16", display: "block" }}
              src={`https://www.youtube.com/embed/${video.src}`}
              title={`RETURN EP animation ${i + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ReturnEP;
