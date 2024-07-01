import "./finder.css";
import wally from "../../assets/wally.png";
import wilma from "../../assets/wilma.png";
import odlaw from "../../assets/odlaw.png";
import whitebeard from "../../assets/whitebeard.png";

export default function Finder({ showFinder, characters, findCharacter }) {
  function renderSwitch(character) {
    switch (character) {
      case "wally":
        return { backgroundImage: `url(${wally})` };
      case "wilma":
        return { backgroundImage: `url(${wilma})` };
      case "odlaw":
        return { backgroundImage: `url(${odlaw})` };
      case "whitebeard":
        return { backgroundImage: `url(${whitebeard})` };
    }
  }

  const listCharacters = characters.map(
    (character) =>
      !character.found && (
        <div
          className="finder-img"
          key={character.id}
          style={renderSwitch(character.name)}
          onClick={
            !character.found
              ? () => {
                  findCharacter(
                    {
                      x: showFinder.x,
                      y: showFinder.y,
                    },
                    character.name
                  );
                }
              : null
          }
        ></div>
      )
  );

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
      <div className="finder-img__container">{listCharacters}</div>
    </div>
  );
}
