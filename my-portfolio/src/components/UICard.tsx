import React from "react";
import { motion } from "framer-motion";
import "./UIcard.css";

const UICard: React.FC = () => {
  return (
    <motion.div
      className="ui-card"
      whileHover={{ scale: 1.1, rotate: 4 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      <div
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "17px",
          border: "2px solid white",
        }}
      >
        <p style={{ color: "white", textAlign: "center" }}>
          <span
            style={{
              fontSize: "64px",
              display: "block",
            }}
          >
            Ui
          </span>
          <span
            style={{
              fontSize: "32px",
              display: "block",
            }}
          >
            and Ux
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default UICard;
