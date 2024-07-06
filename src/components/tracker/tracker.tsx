import "./tracker.css";
import wally from "../../assets/wally.png";
import wilma from "../../assets/wilma.png";
import odlaw from "../../assets/odlaw.png";
import whitebeard from "../../assets/whitebeard.png";

import { Character } from "../../types/types";

export default function Tracker({
  characters,
}: {
  characters: Array<Character>;
}) {
  function renderSwitch(character: string) {
    switch (character) {
      case "wally":
        return { backgroundImage: `url(${wally})` };
      case "wilma":
        return { backgroundImage: `url(${wilma})` };
      case "odlaw":
        return { backgroundImage: `url(${odlaw})` };
      case "whitebeard":
        return { backgroundImage: `url(${whitebeard})` };
    }
  }

  const listCharacters = characters.map((character) => (
    <div
      className={character.found ? "found tracker-img" : "tracker-img"}
      key={character._id}
      style={renderSwitch(character.name)}
    ></div>
  ));

  return <div className="tracker__container">{listCharacters}</div>;
}
