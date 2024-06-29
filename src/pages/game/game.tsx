import Photo from "../../components/photo/photo";
import wallyEasy from "../../assets/wally-easy.jpg"
import wallyMedium from "../../assets/wally-medium.jpg"
import wallyHard from "../../assets/wally-hard.jpeg"

export default function Game() {

  function clickCoords(e) {
    const wally = {
      x: 19,
      y: 23,
    };
    const x = Math.floor((e.pageY / e.target.height) * 100);
    const y = Math.floor((e.pageX / e.target.width) * 100);

    console.log(x, y);
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
    <Photo photo={wallyHard} clickCoords={clickCoords}/>
  )
}
