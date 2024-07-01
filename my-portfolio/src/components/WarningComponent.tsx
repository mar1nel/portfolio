import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WarningComponent.css";
import OKButton from "../icons/OKButton";
import ExitButton from "../icons/ExitButton";

const WarningComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Please exit this website as soon as possible, I really don't take any responsibility if your machine will stop functioning... lol",
    "This is your second warning, leave now, or be ready to lose all your saved passwords keys! >:)",
    "You got me, this is a conditionaly rendered animated component that it's just looking kind of cool :))",
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
      className={`warning-box ${isVisible ? "visible" : "hidden"}`}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 200 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/base-window.png)`,
      }}
    >
      <div className="warning-header ">
        <span>Error: the page is broken! 0xF100</span>
        <motion.div
          className="close-button hover-target"
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          <ExitButton />
        </motion.div>
      </div>
      <div className="warning-content">
        <p>{texts[textIndex]}</p>
      </div>
      <motion.div
        className="ok-button hover-target"
        whileTap={{ scale: 0.9 }}
        onClick={handleButtonClick}
      >
        <OKButton text="I don't care" />
      </motion.div>
    </motion.div>
  );
};

export default WarningComponent;
