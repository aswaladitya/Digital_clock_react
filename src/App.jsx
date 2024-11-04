import React, { useState, useEffect } from 'react';
import './App.css';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="digital-clock">
      {time.toLocaleTimeString()}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Clock</h1>
        <DigitalClock />
      </header>
    </div>
  );
}

export default App;
