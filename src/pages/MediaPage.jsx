import { motion } from "framer-motion";
import ReturnEP from "../components/media-page/ReturnEP";
import OtherArt from "../components/media-page/OtherArt";
import BlenderChallenge from "../components/media-page/BlenderChallenge";

const sections = [ReturnEP, OtherArt, BlenderChallenge];

function MediaPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-screen-xl mx-auto px-8 md:px-12 py-16 md:py-24"
    >
      {/* Page header */}
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        MEDIA
      </p>
      <h1 className="font-display font-black uppercase leading-none text-6xl md:text-8xl text-text mb-16 md:mb-24">
        VISUALS
      </h1>

      <div className="flex flex-col gap-24">
        <ReturnEP />
        <div className="border-t border-[#252525]" />
        <OtherArt />
        <div className="border-t border-[#252525]" />
        <BlenderChallenge />
      </div>
    </motion.div>
  );
}

export default MediaPage;
