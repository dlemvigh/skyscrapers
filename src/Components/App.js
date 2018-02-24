import React, { Component } from 'react';
import Clues from './Skyscrapers/Clues';
import Skyscrapers from './Skyscrapers/Skyscrapers';
import logo from './logo.svg';
import './App.css';
import './Skyscrapers/Skyscrapers.css';

const clues = [
  2, 2, 1, 3,
  2, 2, 3, 1,
  1, 2, 2, 3,
  3, 2, 1, 3];
// const clues = Array.from({ length: 4 * 4 }, (x,i) => i + 1);

const values = {
  "A1": "1",
  "B3": "4",
  "C1": ["2", "3"]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="App-content">
          <Clues clues={clues}>
            <Skyscrapers values={values} />
          </Clues>          
        </main>
      </div>
    );
  }
}

export default App;
    