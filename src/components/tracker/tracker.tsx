import "./tracker.css";

export default function Tracker({ characters }) {
  const listCharacters = characters.map((character) => (
    <div className="tracker-img" key={character.id}>
      {character.name} {character.found ? "O" : "X"}
    </div>
  ));

  return <div className="tracker__container">{listCharacters}</div>;
}
