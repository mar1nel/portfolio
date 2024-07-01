import React from "react";
import "./App.css";
import BorderSVG from "./components/BorderSvg";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import CustomCursor from "./components/CustomCursor";
import MiddlePage from "./components/MiddlePage";
import WarningComponent from "./components/WarningComponent";

const App = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/assets/gradient-mid.png`;
  console.log("Image URL:", imageUrl);
  return (
    <div className="App">
      <CustomCursor />
      <BorderSVG />
      <Navbar />
      <div className="center-container">
        <HeroComponent />
      </div>
      <hr className="horizontal-line" />
      <MiddlePage />
      <img src={imageUrl} alt="Gradient" className="gradient-image" />
      <WarningComponent />
    </div>
  );
};

export default App;
