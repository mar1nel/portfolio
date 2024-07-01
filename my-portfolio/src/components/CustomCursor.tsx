import React, { useEffect } from "react";
import "../App.css";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.setAttribute(
          "style",
          `top: ${e.clientY}px; left: ${e.clientX}px;`,
        );
      }
    };

    const addGrowClass = () => {
      if (cursor) {
        cursor.classList.add("grow");
      }
    };

    const removeGrowClass = () => {
      if (cursor) {
        cursor.classList.remove("grow");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll(".hover-target").forEach((el) => {
      el.addEventListener("mouseover", addGrowClass);
      el.addEventListener("mouseout", removeGrowClass);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll(".hover-target").forEach((el) => {
        el.removeEventListener("mouseover", addGrowClass);
        el.removeEventListener("mouseout", removeGrowClass);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default CustomCursor;
