import React from "react";

function Button(props) {
  const buttonHandler = () => {
    if (props.text === "Reset") {
      props.resetHandler();
    } else if (props.text === "Start") {
      props.startHandler();
    } else if (props.text === "Pause") {
      props.pauseHandler();
    }
  };

  return (
    <div
      className="font-Roboto border-2 border-white text-white flex flex-col w-20 p-1 items-center justify-center hover:bg-white hover:text-black"
      onClick={buttonHandler}
    >
      {props.text}
    </div>
  );
}

export default Button;
