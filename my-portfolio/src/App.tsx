import React from "react";
import "./App.css";
import BorderSVG from "./components/BorderSvg";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import CustomCursor from "./components/CustomCursor";
import MiddlePage from "./components/MiddlePage";

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
      <MiddlePage />
    </div>
  );
};

export default App;
