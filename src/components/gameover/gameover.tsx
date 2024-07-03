import { updateScoreName } from "../../api/score";
import { useNavigate } from "react-router-dom";
import "./gameover.css";

export default function GameOver({ score }) {
  const navigate = useNavigate();

  async function submitScore(e) {
    e.preventDefault();
    await updateScoreName({ name: e.target.name.value }, score._id);
    navigate("/leaderboard", { state: score });
  }

  return (
    <div className="gameover__container">
      <form
        action=""
        method="POST"
        className="gameover__form"
        onSubmit={submitScore}
      ><h1>Enter your name</h1>
        <input type="text" name="name" id="name" placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
