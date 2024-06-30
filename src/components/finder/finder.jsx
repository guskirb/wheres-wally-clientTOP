import "./finder.css";

export default function Finder({ showFinder, characters, findCharacter }) {
  const listCharacters = characters.map(
    (character) =>
      !character.found && (
        <div
          className="finder-img"
          key={character.id}
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
        >
          {character.name}
        </div>
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
