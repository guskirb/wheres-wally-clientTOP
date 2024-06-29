import { useState } from "react";
import "./photo.css";

import Magnifier from "./magnifier/magnifier";

export default function Photo({ photo, clickCoords }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifier, setMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function enableMagnifier() {
    setMagnifier(!magnifier);
  }

  function handleMouseHover(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({
      x: e.pageX - left - window.scrollX,
      y: e.pageY - top - window.scrollY,
    });
  }

  return (
    <div className="photo__container">
      <Magnifier
        photo={photo}
        magnifier={magnifier}
        position={position}
        showMagnifier={showMagnifier}
        cursorPosition={cursorPosition}
      />
      <img
        className="photo"
        src={photo}
        onClick={clickCoords}
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseHover}
      ></img>
      <button onClick={enableMagnifier}>Show Magnifier</button>
    </div>
  );
}
