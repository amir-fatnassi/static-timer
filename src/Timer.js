import React from 'react';
import './Timer.css'
function Timer() {
  return (
    <div className="timer">
      <div className="continer">
        <h2 className="tim">00:30:00</h2>
        <div className="hms">
            <p className="hour">hour</p>
            <p className="minute">minute</p>
            <p className="seconde">seconde</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;