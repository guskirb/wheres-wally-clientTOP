import { useState } from "react";
import { useLocation } from "react-router-dom";
import ListScore from "../../components/list-score/list-score";
import "./leaderboard.css";

export default function Leaderboard() {
  const { state } = useLocation();
  const [difficulty, setDifficulty] = useState(state.difficulty || "easy");
  console.log(state);
  return (
    <div className="leaderboard__container">
      <h1 className="leaderboard-header">Leaderboard</h1>
      <div>
        <button onClick={() => setDifficulty("easy")}>Easy</button>
        <button onClick={() => setDifficulty("medium")}>Medium</button>
        <button onClick={() => setDifficulty("hard")}>Hard</button>
      </div>
      <div className="leaderboard__wrapper">
        <h2 className="leaderboard-difficulty">{difficulty.toUpperCase()}</h2>
        <ListScore difficulty={difficulty} />
      </div>
    </div>
  );
}
