import "./tracker.css";

export default function Tracker({ characters }) {
  return (
    <div className="tracker__container">
      <div className="tracker-img">{characters[0].name} {characters[0].found ? "O" : "X"}</div>
      <div className="tracker-img">{characters[1].name} {characters[1].found ? "O" : "X"}</div>
      <div className="tracker-img">{characters[2].name} {characters[2].found ? "O" : "X"}</div>
    </div>
  );
}
