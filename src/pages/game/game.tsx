import Photo from "../../components/photo/photo";
import { useState, useEffect } from "react";
import { getCharacters } from "../../api/characters";
import { newScore, updateScore } from "../../api/score";

import Tracker from "../../components/tracker/tracker";
import GameOver from "../../components/gameover/gameover";
import Timer from "../../components/timer/timer";

export default function Game({
  photo,
  difficulty,
}: {
  photo: File;
  difficulty: string;
}) {
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState([]);
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
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    async function gameSetup() {
      const response = await Promise.all([
        getCharacters(difficulty),
        newScore({ difficulty: difficulty }),
      ]);
      setCharacters(response[0]);
      setScore(response[1]);
      setLoading(false);
    }
    gameSetup();
  }, []);

  useEffect(() => {
    async function endScore() {
      const response = await updateScore(score._id);
      setScore(response);
    }
    if (characters.length === 4) {
      let gameOver = true;
      characters.forEach((character) => {
        if (!character.found) {
          gameOver = false;
        }
      });

      if (gameOver) {
        endScore();
        setGameOver(true);
      }
    }
  }, [characters]);

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
    const index = characters.map((item) => item.name).indexOf(name);
    const x = (coords.x / dimensions.width) * 100;
    const y = (coords.y / dimensions.height) * 100;

    if (
      x < characters[index].coords.x + 3 &&
      x > characters[index].coords.x - 3 &&
      y < characters[index].coords.y + 4 &&
      y > characters[index].coords.y - 4
    ) {
      setCircles([
        ...circles,
        {
          x: showFinder.x,
          y: showFinder.y,
          found: true,
        },
      ]);
      const updatedCharacters = [...characters];
      updatedCharacters[index].found = true;
      setCharacters(updatedCharacters);
    } else {
      setCircles([
        ...circles,
        {
          x: showFinder.x,
          y: showFinder.y,
          found: false,
        },
      ]);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (gameOver) {
    return <GameOver score={score} />;
  }

  return (
    <>
      <Tracker characters={characters} />
      <Timer />
      <Photo
        photo={photo}
        characters={characters}
        clickCoords={clickCoords}
        showFinder={showFinder}
        setShowFinder={setShowFinder}
        showMagnifier={showMagnifier}
        setShowMagnifier={setShowMagnifier}
        findCharacter={findCharacter}
        circles={circles}
      />
    </>
  );
}
