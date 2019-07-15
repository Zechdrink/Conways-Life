import React from 'react';
import Canvas from './main/Canvas'
 

import './App.css';

function App() {
 

  return (
    <div className="App">
        <h1> Conway's Game Of Life! </h1>
      <header className="App-header">
      <Canvas/>
      </header>
    </div>
  );
}

export default App;
