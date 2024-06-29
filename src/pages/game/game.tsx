import Photo from "../../components/photo/photo";
import { useState } from "react";
import wallyEasy from "../../assets/wally-easy.jpg";
import wallyMedium from "../../assets/wally-medium.jpg";
import wallyHard from "../../assets/wally-hard.jpeg";

export default function Game() {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [showFinder, setShowFinder] = useState({
    show: false,
    x: 0,
    y: 0,
  });

  function clickCoords(e) {
    const wally = {
      x: 44,
      y: 14,
    };
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setShowFinder({
      show: true,
      x: e.pageX - left - window.scrollX,
      y: e.pageY - top - window.scrollY,
    });
    setShowMagnifier(false);

    if (
      x < wally.x + 4 &&
      x > wally.x - 4 &&
      y < wally.y + 4 &&
      y > wally.y - 4
    ) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  return (
    <Photo
      photo={wallyHard}
      clickCoords={clickCoords}
      showFinder={showFinder}
      setShowFinder={setShowFinder}
      showMagnifier={showMagnifier}
      setShowMagnifier={setShowMagnifier}
    />
  );
}
