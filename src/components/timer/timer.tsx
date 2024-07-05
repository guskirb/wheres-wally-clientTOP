import { useEffect, useRef, useState } from "react";
import "./timer.css";

export default function Timer() {
  const [time, setTime] = useState(0);

  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setTime((pre) => pre + 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="timer__container">
      <p>{format(time)}</p>
    </div>
  );
}

function format(time) {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}
