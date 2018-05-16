import React, { Component } from 'react';
import './App.css';
import QuestionsContainer from './components/QuestionsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IntervYou</h1>
        </header>
        <QuestionsContainer />
      </div>
    );
  }
}

export default App;
