import { useState } from "react";
import "./photo.css";

import Magnifier from "../magnifier/magnifier";
import Finder from "../finder/finder";

import { ShowFinder, Circles } from "../../types/types";

export default function Photo({
  photo,
  characters,
  clickCoords,
  showFinder,
  setShowFinder,
  showMagnifier,
  setShowMagnifier,
  findCharacter,
  circles,
}: {
  photo: any;
  characters: object;
  clickCoords: any;
  showFinder: ShowFinder;
  setShowFinder: any;
  showMagnifier: boolean;
  setShowMagnifier: any;
  findCharacter: any;
  circles: Array<Circles>;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function enableMagnifier() {
    setShowMagnifier(!showMagnifier);
    setShowFinder({
      x: 0,
      y: 0,
      show: false,
    });
  }

  function handleMouseHover(e: any) {
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

  const listCircles = circles.map((circle) => (
    <div
      className={circle.found ? "circle-found" : "circle-not-found"}
      style={{ left: `${circle.x - 20}px`, top: `${circle.y - 20}px` }}
    ></div>
  ));

  return (
    <div className="photo__container">
      <Magnifier
        photo={photo}
        position={position}
        showMagnifier={showMagnifier}
        cursorPosition={cursorPosition}
      />
      <Finder
        showFinder={showFinder}
        characters={characters}
        findCharacter={findCharacter}
      />
      {listCircles}
      <img
        className="photo"
        src={photo}
        onClick={clickCoords}
        onMouseMove={handleMouseHover}
      ></img>
      <button
        onClick={enableMagnifier}
        className={
          showMagnifier
            ? "magnifier-button active"
            : "magnifier-button inactive"
        }
      ></button>
    </div>
  );
}
