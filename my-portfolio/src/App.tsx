import React, { useEffect, useState, Suspense, lazy } from "react";
import "./App.css";
import Preloader from "./components/Preloader"; // Import the Preloader component
import BorderSVG from "./components/BorderSvg";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import CustomCursor from "./components/CustomCursor";
import MiddlePage from "./components/MiddlePage";
import WarningComponent1 from "./components/WarningComponent1";
import WarningComponent2 from "./components/WarningComponent2";
import Globe from "./components/Globe";
import EnemyVirus from "./components/EnemyVirus";
import gradientMid from "./assets/gradient-mid.png";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [gradientOpacity, setGradientOpacity] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const EnemyVirus = lazy(() => import("./components/EnemyVirus"));

  // Simulate loading time or wait for all resources to load
  useEffect(() => {
    const fakeLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate 3 seconds of loading time

    return () => clearTimeout(fakeLoadTime);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2700) {
        setStartAnimation(true);
      } else {
        setStartAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2550) {
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

  return (
    <>
      {isLoading ? (
        <Preloader /> // Show the preloader if the app is still loading
      ) : (
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
              src={gradientMid}
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
            <div
              className={`broken-message-container ${
                startAnimation ? "animate__animated animate__tada" : ""
              }`}
            >
              <h1>
                OH NO, WEBSITE IS <br /> <span className="broken">BROKEN</span>
                ??!
              </h1>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <EnemyVirus />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
