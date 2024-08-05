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
        marginLeft: "9.8%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        borderBottom: "2px solid white",
        width: "80.5%",
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
            marginLeft: "80px",
            display: "flex",
            gap: "70px",
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
              ABOUT
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

        <div style={{ border: "1px solid white", height: "65px" }}></div>

        <div
          style={{
            display: "flex",
            marginRight: "60px",
            gap: "90px",
            padding: "15px",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <a
              href="https://t.me/disper228"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link4"
            >
              TELEGRAM
            </a>
            <ArrowIcon color="#127fec" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <a
              href="https://github.com/mar1nel"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link5"
            >
              GITHUB
            </a>
            <ArrowIcon color="#da4c0f" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hover-target"
          >
            <a
              href="https://www.behance.net/ababiivicu"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link6"
            >
              BEHANCE
            </a>
            <ArrowIcon color="#6537c3" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
