import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WarningComponent1.css";
import OKButton from "../icons/OKButton";
import ExitButton from "../icons/ExitButton";
import baseWindow from "../assets/base-window.png";

const WarningComponent1: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "So you tried to read this text over there? Cool, I guess... If you ask, I'm watching Prison Break right now. Strong 8/10 rate from me.",
    "It's like 5AM and I don't even feel tired or bothered, coding this website really heals the inner me. I love it.",
    "─────▄▄────▄▀▀█▀▀▀▀▄\n " +
      "──▄▀▀──▀▀▄▄█▄▄█────█\n" +
      "▄▀─────────█──█────█\n" +
      "────────────▀▀▀▀▀▀▀\n",
  ];

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  const handleButtonClick = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <motion.div
      className={`warning-box1 ${isVisible ? "visible" : "hidden"}`}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 200 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage: `url(${baseWindow})`,
      }}
    >
      <div className="warning-header1">
        <span>Error: The page is broken! 0xR211</span>
        <motion.div
          className="close-button1 hover-target"
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          <ExitButton />
        </motion.div>
      </div>
      <div className="warning-content1">
        <p>{texts[textIndex]}</p>
      </div>
      <motion.div
        className="ok-button1 hover-target"
        whileTap={{ scale: 0.9 }}
        onClick={handleButtonClick}
      >
        <OKButton text="I don't care" />
      </motion.div>
    </motion.div>
  );
};

export default WarningComponent1;
