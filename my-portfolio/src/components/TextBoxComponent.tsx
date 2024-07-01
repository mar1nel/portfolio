import React from "react";
import "./TextBoxComponent.css";

interface TextBoxProps {
  title: string;
  size?: string; // Optional size prop
}

const TextBoxComponent: React.FC<TextBoxProps> = ({
  title,
  size = "medium",
}) => {
  return (
    <div className={`text-box ${size}`}>
      <h2>{title}</h2>
    </div>
  );
};

export default TextBoxComponent;
