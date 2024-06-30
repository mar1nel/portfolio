import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TechCard.css";

const TechCard: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute w-90 h-90 -inset-2 bg-gradient-to-r from-green-500 to bg-green-800 rounded-3xl filter blur-lg opacity-40 transition duration-200 group-hover:opacity-50"></div>

      <div className="relative tech-card overflow-hidden">
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="sweeping-light"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => setHovered(false)}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className="relative text-center text-[#55e27d]">
          <p className="absolute -mt-4 -ml-4 text-5xl font-bold group-hover:text-[#78FF9DFF] transition duration-500">
            ReactJS
          </p>
          <p className="text-2xl mt-16 indent-1 leading-tight">
            Web Design and <br /> Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
