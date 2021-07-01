import React, { useEffect, useState } from "react";

import "./App.css";

function useDelayedMessage(
  message: string,
  timeoutMs: number,
  initialDelay: number
) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (length >= message.length) {
      return;
    }

    const timeout = setTimeout(
      () => {
        setLength((length) => length + 1);
      },
      length === 0 ? initialDelay : timeoutMs
    );

    return () => clearTimeout(timeout);
  }, [length]);

  return message.slice(0, length);
}

function App() {
  const message = useDelayedMessage("starting soon...", 80, 2000);

  return (
    <div className="App">
      <div className="center"><h1 data-shadow='dang!'>starting soon...</h1></div>
      <div className="switch-container" >
          <div className="switch">

          <div className="ghost"> </div>
          </div>
      </div>
{/*       
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
      ))} */}
    </div>
  );
}

export default App;
