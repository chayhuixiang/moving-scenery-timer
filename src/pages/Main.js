import React from "react";
import Title from "../components/Title";
import Timer from "../components/Timer";
import Button from "../components/Button";
import BackgroundShape from "../components/BackgroundShape";
import Rules from "../components/Rules";
import { useState, useEffect } from "react";

function Main() {
  const [time, setTime] = useState(480);
  const [timerActive, setTimerActive] = useState(false);
  const [startButtonWord, setStartButtonWord] = useState("Start");

  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setTimeout(() => {
        setTime((prevTime) => {
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearTimeout(timer);
  });

  const resetHandler = () => {
    setTimerActive(false);
    setTime(480);
    setStartButtonWord("Start");
  };

  const startHandler = () => {
    setTimerActive(true);
    setStartButtonWord("Pause");
  }

  const pauseHandler = () => {
    setTimerActive(false);
    setStartButtonWord("Start");
  }

  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat overflow-auto flex flex-col items-center p-20"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/5050860.jpg")`,
      }}
    >
      <BackgroundShape classProps="p-14">
        <Title text="Moving Scenery" />
        <Timer time={time} />
        <div className="flex justify-center space-x-20">
          <Button text={startButtonWord} startHandler={startHandler} pauseHandler={pauseHandler} />
          <Button text="Reset" resetHandler={resetHandler} />
        </div>
        <Rules />
      </BackgroundShape>
    </div>
  );
}

export default Main;
