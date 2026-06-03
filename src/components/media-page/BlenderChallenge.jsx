import { motion } from "framer-motion";
import blenderChallenge from "../../data/media/blender-challenge/blender-chal-data.jsx";
import TweetEmbed from "../TweetEmbed.jsx";

function BlenderChallenge() {
  return (
    <section>
      {/* Section label + description */}
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
          31 DAY BLENDER CHALLENGE
        </p>
        <p className="font-mono text-sm text-text/70 max-w-md leading-relaxed">
          Exposure therapy through daily creation. Setting creative limitations,
          time constraints, and overcoming the fear of sharing work publicly —
          posted each day to X.
        </p>
      </div>

      {/* Tweet grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {blenderChallenge.map((tweet, i) => (
          <motion.div
            key={tweet.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
            className="break-inside-avoid"
          >
            <TweetEmbed tweetId={tweet.src} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BlenderChallenge;
