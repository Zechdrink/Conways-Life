import Main from './main/Main'
import Rules from './main/Rules';
import About from './main/About';
import Footer from './main/Footer';
import React from 'react';
import './App.css';

function App() {
 

  return (
    <div className="App">
        <h1 id = "title"> Conway's Game Of Life! </h1>
        <header className="App-header">
        <Main/>
        <Rules/>
        </header>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
