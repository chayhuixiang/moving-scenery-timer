import React from "react";

function Timer(props) {
  let date = new Date(0);
  date.setSeconds(props.time);
  let dateString = date.toISOString().substring(14, 19);
  return (
    <div className="font-Roboto text-white text-center text-9xl font-medium mt-10 mb-5">
      {dateString}
    </div>
  );
}

export default Timer;
