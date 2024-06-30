import React, { useState, useEffect } from "react";
import Eyes1Icon from "../icons/Eyes1Icon";
import Eyes2Icon from "../icons/Eyes2Icon";

const BlinkingEyes: React.FC = () => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => {
        setBlink(false);
      }, 500);
    }, 5000);

    return () => clearInterval(blinkInterval);
  }, []);

  return <div>{blink ? <Eyes2Icon /> : <Eyes1Icon />}</div>;
};

export default BlinkingEyes;
