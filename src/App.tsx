import React from "react";
import logo from "./logo.svg";
import icecream from "./original.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <div className="title">
          starting soon
        </div>
      </div>
      {Array.from({ length: 10 }, () => (
        <div className="cols">
          {Array.from({ length: 10 }, () => (
            <img
              alt="icecream"
              src={icecream}
              style={{ width: 192, height: 150, objectFit: "contain", padding: 10}}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
