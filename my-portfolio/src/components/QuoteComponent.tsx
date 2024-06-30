import React, { useEffect, useRef } from "react";
import BlinkingEyes from "../components/BlinkingEyes";
import MouthIcon from "../icons/MouthIcon";

const QuoteComponent: React.FC = () => {
  const eyesRef = useRef<HTMLDivElement>(null);
  const mouthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const eyes = eyesRef.current;
      const mouth = mouthRef.current;
      if (!eyes || !mouth) return;

      const { clientX, clientY } = event;
      const faceContainer = eyes.parentElement;
      if (!faceContainer) return;

      const { left, top, width, height } =
        faceContainer.getBoundingClientRect();
      const faceX = left + width / 2;
      const faceY = top + height / 2;

      const offsetX = Math.min(Math.max((clientX - faceX) / 20, -5), 5);
      const offsetY = Math.min(Math.max((clientY - faceY) / 20, -5), 5);

      eyes.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      mouth.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex items-center">
      <div className="bg-[#4D2527] bg-opacity-25 border-2 border-red-500 rounded-2xl p-4 mr-4">
        <p className=" text-red-500 text-xl">“It works on my machine”</p>
      </div>
      <div className="w-16 h-16 bg-[#4D2527] bg-opacity-25 border-2 border-red-500 rounded-full flex items-center justify-center relative">
        <div
          ref={eyesRef}
          className="transition-transform duration-200 ease-out absolute"
        >
          <BlinkingEyes />
        </div>
        <div
          ref={mouthRef}
          className="transition-transform duration-200 ease-out absolute mt-6"
        >
          <MouthIcon />
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
