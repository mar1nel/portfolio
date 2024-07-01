import React from "react";
import { Link } from "react-scroll";
import ArrowIcon from "../icons/ArrowIcon";
import PolygonIcon from "../icons/PolygonIcon";
import RectangleIcon from "../icons/RectangleIcon";
import EllipseIcon from "../icons/EllipseIcon";
import "./Navbar.css";

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
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={1200}
              className="navbar-link1"
            >
              ABOUT ME
            </Link>
            <EllipseIcon />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-link2"
            >
              PORTFOLIO
            </Link>
            <RectangleIcon />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-link3"
            >
              PROJECTS
            </Link>
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
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <Link
              to="telegram"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-link4"
            >
              TELEGRAM
            </Link>
            <ArrowIcon />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <Link
              to="wapp"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-link5"
            >
              WHATSAPP
            </Link>
            <ArrowIcon />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <Link
              to="instagram"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-link6"
            >
              INSTAGRAM
            </Link>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
