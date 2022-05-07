import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

function SceneField() {
  return (
    <div className="grid grid-cols-12 divide-x">
      <div className="col-span-1">
        <GlobeIcon className="h-8 w-8 text-white" />
      </div>
      <div className="col-span-11">
        <input className="h-full container bg-transparent font-Roboto text-white text-center" placeholder="Enter Scene here!"/>
      </div>
    </div>
  );
}

export default SceneField;
