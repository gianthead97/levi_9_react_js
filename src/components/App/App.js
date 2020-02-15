import React from 'react';
import './App.css';
import Scoreboard from '../ScoreBoard/Scoreboard';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Scoreboard />
      </div>
    );
  }
}

export default App;
