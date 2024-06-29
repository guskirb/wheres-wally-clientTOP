import "./finder.css";

export default function Finder({ showFinder, characters, findCharacter }) {
  return (
    <div
      className="finder__container"
      style={
        showFinder.show
          ? {
              left: `${showFinder.x - 40}px`,
              top: `${showFinder.y - 40}px`,
            }
          : { display: "none" }
      }
    >
      <div className="finder-circle" key={showFinder.x}></div>
      <div className="finder-img__container">
        <div
          className="finder-img img1"
          onClick={() => {
            findCharacter(
              {
                x: showFinder.x,
                y: showFinder.y,
              },
              0
            );
          }}
        >
          {characters[0].name}
        </div>
        <div
          className="finder-img img2"
          onClick={() => {
            findCharacter(
              {
                x: showFinder.x,
                y: showFinder.y,
              },
              1
            );
          }}
        >
          {characters[1].name}{" "}
        </div>
        <div
          className="finder-img img3"
          onClick={() => {
            findCharacter(
              {
                x: showFinder.x,
                y: showFinder.y,
              },
              2
            );
          }}
        >
          {characters[2].name}
        </div>
      </div>
    </div>
  );
}
