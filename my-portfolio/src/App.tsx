import React, { useEffect, useState } from "react";
import "./App.css";
import BorderSVG from "./components/BorderSvg";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import CustomCursor from "./components/CustomCursor";
import MiddlePage from "./components/MiddlePage";
import WarningComponent1 from "./components/WarningComponent1";
import WarningComponent2 from "./components/WarningComponent2";
import Globe from "./components/Globe";
import LineDraw from "./components/LineDraw";
import EnemyVirus from "./components/EnemyVirus";

const App = () => {
  const [gradientOpacity, setGradientOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2350) {
        setGradientOpacity(1);
      } else {
        setGradientOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const imageUrl = `${process.env.PUBLIC_URL}/assets/gradient-mid.png`;
  console.log("Image URL:", imageUrl);
  return (
    <div className="App">
      <div>
        <CustomCursor />
        <BorderSVG />
        <Navbar />
        <div className="center-container">
          <HeroComponent />
        </div>
        <hr className="horizontal-line" />
        <MiddlePage />
        <img
          src={imageUrl}
          alt="Gradient"
          className="gradient-image"
          style={{
            opacity: gradientOpacity,
            transition: "opacity 2.5s ease-in-out",
          }}
        />
        <WarningComponent1 />
        <WarningComponent2 />
        <div style={{ marginTop: 550, marginLeft: 330 }}>
          <Globe />
        </div>

        {/*<LineDraw />*/}
        <EnemyVirus />
      </div>
    </div>
  );
};

export default App;
