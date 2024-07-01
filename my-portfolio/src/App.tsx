import React from "react";
import "./App.css";
import BorderSVG from "./components/BorderSvg";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import CustomCursor from "./components/CustomCursor";
import MiddlePage from "./components/MiddlePage";
import WarningComponent1 from "./components/WarningComponent1";
import WarningComponent2 from "./components/WarningComponent2";

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
      <WarningComponent1 />
      <WarningComponent2 />
    </div>
  );
};

export default App;
