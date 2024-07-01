import React from "react";

const OKButton: React.FC<{ text?: string }> = ({ text = "OK" }) => (
  <svg
    width="217"
    height="50"
    viewBox="0 0 217 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="217" height="50" fill="#D9D9D9" />
    <path d="M212 5L217 0V45H212V5Z" fill="#585954" />
    <path d="M5 45L2.18558e-07 50L217 50L217 45L5 45Z" fill="#585954" />
    <rect
      x="5"
      y="5"
      width="207"
      height="40"
      fill="url(#paint0_linear_377_19)"
    />
    <rect
      x="9"
      y="8"
      width="200"
      height="35"
      stroke="black"
      stroke-opacity="0.5"
      stroke-dasharray="2 3"
    />
    <text
      x="50%"
      y="54%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Arial"
      fontSize="18"
      fill="black"
    >
      {text}
    </text>
    <defs>
      <linearGradient
        id="paint0_linear_377_19"
        x1="5"
        y1="5"
        x2="212"
        y2="45"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D0CEC3" />
        <stop offset="1" stop-color="#C1BFB4" />
      </linearGradient>
    </defs>
  </svg>
);

export default OKButton;
