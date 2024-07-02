import "./gameover.css";
import { updateScoreName } from "../../api/score";

export default function GameOver({ score }) {
  async function submitScore(e) {
    e.preventDefault();
    await updateScoreName({ name: e.target.name.value }, score._id);
  }

  return (
    <div className="gameover__container">
      <form
        action=""
        method="POST"
        className="gameover__form"
        onSubmit={submitScore}
      >
        <input type="text" name="name" id="name" placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
