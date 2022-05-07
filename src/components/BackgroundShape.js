import React from 'react';

function BackgroundShape(props) {
  return (
    <div className={`bg-black bg-opacity-50 rounded-lg w-1/2 mb-5 ${props.classProps}`}>{props.children}</div>
  )
}

export default BackgroundShape;
