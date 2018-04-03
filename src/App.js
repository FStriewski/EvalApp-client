import React, { Component } from 'react';
import TitleBar from './containers/TitleBar';
import LogInContainer from './containers/LogInContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <LogInContainer/>
        This is the app
      </div>
    );
  }
}

export default App;
