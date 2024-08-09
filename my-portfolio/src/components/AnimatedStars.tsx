import React from "react";
import { motion } from "framer-motion";
import StarFull from "../icons/StarFull";

const AnimatedStar: React.FC = () => {
  return (
    <div className="relative w-32 h-32">
      <motion.div
        className="absolute top-0 left-0"
        initial={{ opacity: 1, rotate: 0, scale: 1, filter: "blur(5px)" }}
        animate={{
          rotate: 360,
          scale: [1, 1.2, 0.9, 1, 0.8, 1.1],
          filter: ["blur(0px)", "blur(10px)", "blur(0px)"],
        }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "easeInOut",
        }}
      >
        <StarFull />
      </motion.div>
    </div>
  );
};

export default AnimatedStar;
