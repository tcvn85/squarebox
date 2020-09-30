import React, { useState } from 'react';
import Box from "./components/box";
import Header from "./components/header";
import './app.scss';

const App = props => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(60);
  const [speed, setSpeed] = useState(2000);

  const handleClick = e => {
    // e.preventDefault();
    setX(e.pageX);
    setY(e.pageY);
  }

  const updateSpeed = value => {
    setSpeed(value);
  }

  return (
    <div className="app">
      <Header onChange={updateSpeed} />
      <main className="main" onClick={handleClick}> 
        <Box x={x} y={y} speed={speed} />
      </main>
    </div>
  );
}

export default App;
