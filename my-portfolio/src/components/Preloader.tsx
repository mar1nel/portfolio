import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 500));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-bar" style={{ width: `${progress}%` }}></div>
      <p>Loading... {progress}%</p>
    </div>
  );
};

export default Preloader;
