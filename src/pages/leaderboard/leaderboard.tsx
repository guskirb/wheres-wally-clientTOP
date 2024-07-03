import { useState } from "react";
import { useLocation } from "react-router-dom";
import ListScore from "../../components/list-score/list-score";
import wally from "../../assets/home-wally.png"
import "./leaderboard.css";

export default function Leaderboard() {
  const { state } = useLocation();
  const [difficulty, setDifficulty] = useState(state?.difficulty || "easy");
  
  return (
    <div className="leaderboard__container">
      <div className="header__container">
        <h1 className="leaderboard-header">Leaderboard</h1>
        <div>
          <button onClick={() => setDifficulty("easy")}>Easy</button>
          <button onClick={() => setDifficulty("medium")}>Medium</button>
          <button onClick={() => setDifficulty("hard")}>Hard</button>
        </div>
      </div>
      <img src={wally} alt="" className="wally-leaderboard" />
      <div className="leaderboard__wrapper">
        <h2 className="leaderboard-difficulty">{difficulty.toUpperCase()}</h2>
        <ListScore difficulty={difficulty} />
      </div>
    </div>
  );
}
