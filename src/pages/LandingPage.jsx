import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import R3FText from "../components/landing-page/R3FText";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page-wrapper">
      <R3FText />
      <motion.button
        onClick={() => navigate("/home")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-[35%] left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors bg-transparent border-none cursor-pointer select-none"
      >
        ENTER
      </motion.button>
    </div>
  );
}

export default LandingPage;
