import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import PolygonIcon from "../icons/PolygonIcon";
import RectangleIcon from "../icons/RectangleIcon";
import EllipseIcon from "../icons/EllipseIcon";

const Navbar = () => {
  return (
    <nav
      style={{
        marginLeft: "181px",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        borderBottom: "2px solid white",
        width: "1535px",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "70px",
          fontSize: "24px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            marginLeft: "60px",
            display: "flex",
            gap: "60px",
            padding: "15px",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a href="#about" style={{ textDecoration: "none", color: "white" }}>
              ABOUT ME
            </a>
            <EllipseIcon />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a
              href="#portfolio"
              style={{ textDecoration: "none", color: "white" }}
            >
              PORTFOLIO
            </a>
            <RectangleIcon />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a
              href="#projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              PROJECTS
            </a>
            <PolygonIcon />
          </div>
        </div>

        <div style={{ border: "1px solid white", height: "60px" }}></div>

        <div
          style={{
            display: "flex",
            marginRight: "60px",
            gap: "60px",
            padding: "15px",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a
              href="#telegram"
              style={{ textDecoration: "none", color: "white" }}
            >
              TELEGRAM
            </a>
            <ArrowIcon />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a href="#wapp" style={{ textDecoration: "none", color: "white" }}>
              WHATSAPP
            </a>
            <ArrowIcon />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a
              href="#instagram"
              style={{ textDecoration: "none", color: "white" }}
            >
              INSTAGRAM
            </a>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
