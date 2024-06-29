import Photo from "../../components/photo/photo";
import { useState } from "react";
import wallyEasy from "../../assets/wally-easy.jpg";
import wallyMedium from "../../assets/wally-medium.jpg";
import wallyHard from "../../assets/wally-hard.jpeg";

import Tracker from "../../components/tracker/tracker";

export default function Game() {
  const [characters, setCharacters] = useState([
    {
      name: "wally",
      id: 1,
      found: false,
      coords: {
        x: 18,
        y: 81,
      },
    },
    {
      name: "wilma",
      id: 2,
      found: false,
      coords: {
        x: 74,
        y: 74,
      },
    },
    {
      name: "whitebeard",
      id: 3,
      found: false,
      coords: {
        x: 29,
        y: 16,
      },
    },
  ]);
  const [dimensions, setDimensions] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [showFinder, setShowFinder] = useState({
    show: false,
    x: 0,
    y: 0,
  });

  function clickCoords(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    setDimensions({
      left: left,
      top: top,
      width: width,
      height: height,
    });

    setShowFinder({
      show: !showFinder.show,
      x: e.pageX - left - window.scrollX,
      y: e.pageY - top - window.scrollY,
    });
    setShowMagnifier(false);
  }

  function findCharacter(coords, name) {
    const index = characters.map((i) => i.name).indexOf(name);
    const x = (coords.x / dimensions.width) * 100;
    const y = (coords.y / dimensions.height) * 100;

    if (
      x < characters[index].coords.x + 4 &&
      x > characters[index].coords.x - 4 &&
      y < characters[index].coords.y + 4 &&
      y > characters[index].coords.y - 4
    ) {
      console.log(true);
      const updatedCharacters = [...characters];
      updatedCharacters[index].found = true;
      setCharacters(updatedCharacters);
    } else {
      console.log(false);
    }
  }

  return (
    <>
      <Tracker characters={characters} />
      <Photo
        photo={wallyHard}
        characters={characters}
        clickCoords={clickCoords}
        showFinder={showFinder}
        setShowFinder={setShowFinder}
        showMagnifier={showMagnifier}
        setShowMagnifier={setShowMagnifier}
        findCharacter={findCharacter}
      />
    </>
  );
}
