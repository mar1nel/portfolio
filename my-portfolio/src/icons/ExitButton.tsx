import React, { SVGProps } from "react";

const ExitButton: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="25" height="25" fill="#D9D9D9" />
    <path d="M22 3L25 0V25H22V3Z" fill="#182128" />
    <path d="M3 22L1.31134e-07 25L25 25L25 22L3 22Z" fill="#182128" />
    <rect x="3" y="3" width="19" height="19" fill="#D0CEC3" />
    <rect
      x="6"
      y="8.41418"
      width="2"
      height="15"
      transform="rotate(-45 6 8.41418)"
      fill="url(#paint0_linear_388_29)"
    />
    <rect
      x="16.6066"
      y="7"
      width="2"
      height="15"
      transform="rotate(45 16.6066 7)"
      fill="url(#paint1_linear_388_29)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_388_29"
        x1="7"
        y1="8.41418"
        x2="7"
        y2="23.4142"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.51" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_388_29"
        x1="17.6066"
        y1="7"
        x2="17.6066"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.51" />
        <stop offset="1" />
      </linearGradient>
    </defs>
  </svg>
);

export default ExitButton;
