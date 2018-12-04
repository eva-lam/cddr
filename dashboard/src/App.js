import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './views/home';
import Student from './components/student/Student';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/student/:id" component={Student} />

          <footer className="App-footer" />
        </div>
      </Router>
    );
  }
}

export default App;
