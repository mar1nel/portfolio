import React, { CSSProperties } from "react";

interface EllipseIconProps {
  style?: CSSProperties;
}

const EllipseIcon: React.FC<EllipseIconProps> = ({ style }) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <circle cx="11.5" cy="11.5" r="10.75" stroke="#53CF75" strokeWidth="1.5" />
  </svg>
);

export default EllipseIcon;
