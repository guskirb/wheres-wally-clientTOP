import "./tracker.css";

export default function Tracker({ characters }) {
  const listCharacters = characters.map((character) => (
    <div
      className={character.found ? "found tracker-img" : "tracker-img"}
      key={character.id}
    >
      {character.name}
    </div>
  ));

  return <div className="tracker__container">{listCharacters}</div>;
}
