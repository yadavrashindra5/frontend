/* eslint-disable no-unused-vars */
import { useState } from "react";
import style from "./style.module.scss";

const CountDown = () => {
  const [time, setTime] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  const [timerLeft, setTimerLeft] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [isTimerRunning, setTimerRunning] = useState(false);

  const convertToSeconds = () => {
    return (
      parseInt(time.hour) * 3600 +
      parseInt(time.minute) * 60 +
      parseInt(time.second)
    );
  };

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setTime((prevState) => ({ ...prevState, [name]: value }));
  };

  const formatTime = () => {
    const h = Math.floor(timerLeft / 3600);
    const m = Math.floor((timerLeft % 3600) / 60);
    const s = timerLeft % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const startButtonHandler = () => {
    if (isTimerRunning) {
      return;
    }
    setTimerRunning(true);
    setTimerLeft(convertToSeconds());
    const intervalTimerId = setInterval(() => {
      setTimerLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          isTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimerId(intervalTimerId);
  };

  const stopButtonHandler = () => {
    if (isTimerRunning) {
      clearInterval(timerId);
      setTimerRunning(false);
    }
  };

  const resumeButtonHandler = () => {
    setTimerRunning(true);
    const intervalTimerId = setInterval(() => {
      setTimerLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          isTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimerId(intervalTimerId);
  };

  const resetButtonHandler = () => {
    clearInterval(timerId);
    setTimerRunning(false);
  };

  return (
    <main className={style.mainContainer}>
      <div className={style.heading}>count Down Timer</div>

      <div className={style.timerInputContainer}>
        <input
          className={style.hourInput}
          placeholder="Enter Hours In Number"
          value={time.hour}
          onChange={changeEventHandler}
          name="hour"
        />
        <input
          className={style.minuteInput}
          placeholder="Enter Minutes in Number"
          value={time.minute}
          onChange={changeEventHandler}
          name="minute"
        />
        <input
          className={style.secondInput}
          placeholder="Enter Seconds in Number"
          value={time.second}
          onChange={changeEventHandler}
          name="second"
        />
      </div>

      <div className={style.actionController}>
        <button onClick={startButtonHandler}>Start</button>
        <button onClick={stopButtonHandler}>Stop</button>
        <button onClick={resumeButtonHandler}>Resume</button>
        <button onClick={resetButtonHandler}>Reset</button>
      </div>

      <div>{formatTime()}</div>
    </main>
  );
};

export default CountDown;
