import { Link } from "react-router-dom";
import "./home.css";
import wallyEasy from "../../assets/wally-easy.jpg";
import wallyMedium from "../../assets/wally-medium.jpg";
import wallyHard from "../../assets/wally-hard.jpeg";
import logo from "../../assets/logo.svg";
import wally from "../../assets/wally.png";

export default function Home() {
  return (
    <div className="home__container">
      <img src={logo} alt="" className="logo" />
      <img src={wally} alt="" className="wally" />
      <div className="difficulty__container">
        <Link to="/play/easy">
          <div className="circle__container">
            <div
              className="easy difficulty"
              style={{
                backgroundImage: `url(${wallyEasy})`,
              }}
            ></div>
            <h2>Easy</h2>
          </div>
        </Link>
        <Link to="/play/medium">
          <div className="circle__container">
            <div
              className="medium difficulty"
              style={{
                backgroundImage: `url(${wallyMedium})`,
              }}
            ></div>
            <h2>Medium</h2>
          </div>
        </Link>
        <Link to="/play/hard">
          <div className="circle__container">
            <div
              className="hard difficulty"
              style={{
                backgroundImage: `url(${wallyHard})`,
              }}
            ></div>
            <h2>Hard</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
