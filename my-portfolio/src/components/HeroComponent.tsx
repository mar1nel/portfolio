import React from "react";
import "./HeroComponent.css";
import UICard from "./UICard";
import TechCard from "./TechCard";
import QuoteComponent from "./QuoteComponent";
import StarRed from "../icons/StarRed";
import AnimatedStars from "./AnimatedStars";
import Tiles from "../icons/Tiles";

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-item hero-item-1">
        <p style={{ fontSize: "40px" }}>This website is about</p>
        <p style={{ fontSize: "60px", fontWeight: 600, marginTop: "-20px" }}>
          ABABII VICU-MARIN
        </p>
      </div>

      <div className=" hover-target hero-item hero-item-2 ">
        <UICard />
      </div>

      <div className="hero-item hero-item-3">
        <TechCard />
      </div>

      <div className="hero-item hero-item-4">
        <QuoteComponent />
      </div>

      <div className="hero-item hero-item-5">
        <h2 className="text-xl font-medium mb-3">
          About this Portfolio Website:
        </h2>
        <p>
          This page is a digital version of my resume and CV, it was done from
          zero and from scratch, moreover it was designed in Figma by me in 2021
          and forgotten till in 2024. I’ll leave it open-source if anyone would
          like to use it in their portfolios.
        </p>
      </div>

      <div className="hero-item hero-item-6">
        <div className="relative ">
          <div className="absolute ">
            <StarRed />
          </div>
          <AnimatedStars />
        </div>
      </div>
      <div className="grid">
        <Tiles />
      </div>
    </div>
  );
};

export default HeroComponent;
