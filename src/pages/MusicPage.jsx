import { motion } from "framer-motion";
import AudioPlayer from "../components/music-page/AudioPlayer";

function MusicPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <AudioPlayer />
    </motion.div>
  );
}

export default MusicPage;
