import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./BrokenTextBoxComponent.css";

const generateRandomText = (length: number): string => {
  const characters = "AMNOPQRSTstuvwxyz0123!@#$%^&*";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const BrokenTextBoxComponent: React.FC = () => {
  const [text, setText] = useState("PORTFOLIO");
  const [isBroken, setIsBroken] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2180) {
        setIsBroken(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isBroken) {
      interval = setInterval(() => {
        setText(generateRandomText(10));
      }, 300);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBroken]);

  return (
    <motion.div
      className="broken-text-box"
      initial={{ y: 0 }}
      animate={
        isBroken ? { y: 100, opacity: 0, rotate: [0, 4, -5, 5, -9, 0] } : {}
      }
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <h2>{text}</h2>
    </motion.div>
  );
};

export default BrokenTextBoxComponent;
