import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import TitleBar from './containers/TitleBar';
import LogInContainer from './containers/LogInContainer';
import BatchList from './components/BatchList';
import StudentListContainer from './containers/StudentListContainer';
import EvalContainer from './containers/EvalContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TitleBar />

          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={LogInContainer} />
          <Route exact path="/batches" component={BatchList} />
          <Route exact path="/students" component={StudentListContainer} />
          <Route exact path="/evaluation" component={EvalContainer} />
          
          <Route exact path="/batches/:id" component={StudentListContainer} />
          <Route exact path="/students/:id/evaluation" component={EvalContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
