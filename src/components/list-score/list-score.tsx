import { useState, useEffect } from "react";
import { getScores } from "../../api/score";
import "./list-score.css";

import { Score } from "../../types/types";

export default function ListScore({ difficulty }: { difficulty: string }) {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function scores() {
      const response = await getScores(difficulty);
      setScores(response);
      setLoading(false);
    }
    scores();
  }, [difficulty]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const listScores = scores
    .sort((a: Score, b: Score) => a.score.seconds - b.score.seconds)
    .map((score: Score, index) => (
      <>
        <p>{index + 1}</p>
        <p>{score.name}</p>
        <p>{score.score.seconds}s</p>
      </>
    ));

  return (
    <div className="score__grid">
      <h2>Rank</h2>
      <h2>Name</h2>
      <h2>Time</h2>
      {listScores}
    </div>
  );
}
