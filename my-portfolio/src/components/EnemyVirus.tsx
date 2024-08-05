import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./EnemyVirus.css";
import virus1 from "../assets/virus1.png";
import virus2 from "../assets/virus2.png";

const EnemyVirus: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1500 && scrollY < 2050) {
        setShowImages(true);
        setStartAnimation(true);
      } else {
        setStartAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showImages && (
        <>
          <motion.div
            className="enemy-virus-container"
            initial={{ opacity: 0, x: -600 }}
            animate={
              startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              src={virus2}
              alt="Enemy Virus"
              className="enemy-virus"
              animate={
                startAnimation
                  ? { rotate: [2, 2, -2, 2, 2], y: [16, -28, -22, 16] }
                  : {}
              }
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="enemy2-container"
            initial={{ opacity: 0, x: 100 }}
            animate={
              startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              src={virus1}
              alt="Enemy 2"
              className="enemy2"
              animate={
                startAnimation
                  ? { rotate: [0, 2, -4, 20, -20, 7, 0], y: [0, -18, 18, 0] }
                  : {}
              }
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="enemy3-container"
            initial={{ opacity: 0, y: 100 }}
            animate={
              startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              src={virus1}
              alt="Enemy 3"
              className="enemy3"
              animate={
                startAnimation
                  ? { rotate: [5, 15, 15, 5], y: [5, 15, 75, 5] }
                  : {}
              }
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default EnemyVirus;
