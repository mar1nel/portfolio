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
  const [text1, setText1] = useState("PORTFOLIO");
  const [text2, setText2] = useState("Web Design");
  const [text3, setText3] = useState("Something");
  const [text4, setText4] = useState("Ababii Vicu");
  const [text5, setText5] = useState("Hello Word");
  const [isBroken, setIsBroken] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2100) {
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
        setText1(generateRandomText(10));
        setText2(generateRandomText(6));
        setText3(generateRandomText(15));
        setText4(generateRandomText(8));
        setText5(generateRandomText(14));
      }, 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBroken]);

  return (
    <motion.div
      className="broken-text-box"
      initial={{ y: 0, opacity: 100 }}
      animate={
        isBroken ? { y: 100, opacity: 90, rotate: [0, 4, -5, 5, -9, 0] } : {}
      }
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <h2>{text1}</h2>
      <div className="text-down1">
        <div>{text2}</div>
        <div>{text3}</div>
      </div>
      <div className="text-down2">
        <div>{text4}</div>
        <div>{text5}</div>
      </div>
      <div className="text-down3">
        <div>{text4}</div>
        <div>{text1}</div>
      </div>
    </motion.div>
  );
};

export default BrokenTextBoxComponent;
