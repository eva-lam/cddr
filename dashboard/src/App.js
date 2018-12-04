import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/home';
import UserPage from './components/user-page/UserPage';

import Logo from './vg.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/user-page" component={UserPage} />

          <footer className="App-footer" />
        </div>
      </Router>
    );
  }
}

export default App;
