import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function App() {

  const [playing, setPlaying] = useState(false);
  const [key, setKey] = useState(0);

  return (
    <div className="App">
      <div className="Timer">
        <CountdownCircleTimer
          key={key}
          isPlaying={playing}
          duration={60}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>

        <div className="Buttons">
          <button className="PlayPause" onClick={() => setPlaying(!playing)}>{playing ? "Pause" : "Start"}</button>
          <button className="Restart" onClick={() => setKey(prevKey => prevKey + 1)}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
