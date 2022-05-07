import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Scene from "./pages/Scene";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/scene" element={<Scene />}/>
    </Routes>
  );
}

export default App;
