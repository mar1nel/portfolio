import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WarningComponent2.css";
import OKButton from "../icons/OKButton";
import ExitButton from "../icons/ExitButton";

const WarningComponent2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Thanks man, now the website is broken, look what you did... how I'm going to repair it now? And why there's purple light down there?",
    "Even the components are lagging and bugging... What is this? Do something.. Call and ambulance at least, don't leave it that way...",
    "You got me :)) this is a conditionally rendered animated component that it's just looking kind of cool and the page was designed this way lol",
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
      className={`warning-box2 ${isVisible ? "visible" : "hidden"}`}
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 500 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/base-window.png)`,
      }}
    >
      <div className="warning-header2 ">
        <span>Error: The page is broken! 0xF100</span>
        <motion.div
          className="close-button2 hover-target"
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          <ExitButton />
        </motion.div>
      </div>
      <div className="warning-content2">
        <p>{texts[textIndex]}</p>
      </div>
      <motion.div
        className="ok-button2 hover-target"
        whileTap={{ scale: 0.9 }}
        onClick={handleButtonClick}
      >
        <OKButton text="I don't care" />
      </motion.div>
    </motion.div>
  );
};

export default WarningComponent2;
