import React from "react";

function Timer(props) {
    let minutes = Math.floor(props.time/60);
    let seconds = props.time%60;
  return (
    <div className="font-Roboto text-white text-center text-9xl font-medium mt-10 mb-5">{minutes}:{seconds ? seconds : '00'}
    </div>
  );
}

export default Timer;
