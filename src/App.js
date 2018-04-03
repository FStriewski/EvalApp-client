import React, { Component } from 'react';
import TitleBar from './containers/TitleBar';
import LogInContainer from './containers/LogInContainer';
import BatchContainer from './containers/BatchContainer';
import StudentListContainer from './containers/StudentListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        {/* <LogInContainer/> */}
        {/* <BatchContainer />  */}
        <StudentListContainer />
        This is the app
      </div>
    );
  }
}

export default App;
