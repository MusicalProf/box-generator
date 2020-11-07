import logo from "./logo.svg";
import "./App.css";
import BoxForm from "./components/BoxForm.js";
import Box from "./components/Box.js";
import React, { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);
  const createBox = (nextBox) => {
    setBoxes([...boxes, nextBox]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BoxForm createBox={createBox} />
        <br />
      </header>
      <main className="App-main">
          {boxes.map((item, i) => (
            <Box thisBox={item} />
          ))}
      </main>
    </div>
  );
}

export default App;
