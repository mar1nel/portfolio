import React from "react";
import "./App.css";
import BorderSVG from "./components/BorderSvg";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import UICard from "./components/UICard";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="App">
      <CustomCursor />

      <BorderSVG />
      <Navbar />
      <div className="center-container">
        <HeroComponent />
      </div>

      <hr className="horizontal-line" />
    </div>
  );
};

export default App;
