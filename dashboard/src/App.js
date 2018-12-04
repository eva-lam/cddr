import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/home';
import BarChart from './views/bar-chart';
import AnimatedBarChart from './views/bar-chart/animated-chart';
import DonutChart from './views/donut-chart';
import ExperienceChart from './views/experience-donut-chart';
import StudentsInterestChart from './views/experience-donut-chart';
import MultiSeriesLineChart from './views/multi-series-line-chart';
import AnimatedMultiSeriesLineChart from './views/multi-series-line-chart/animated-chart';
import image1 from './logo.jpg';

import Logo from './vg.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>CDDR Management Overview</p>
    
          </header>
          {/* <nav className="App-nav">
            <Link to="/">Home</Link>{' '}

          </nav> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/bar-chart" component={BarChart} />
          <Route
            exact
            path="/bar-chart/animated"
            component={AnimatedBarChart}
          />
          <Route exact path="/donut-chart" component={DonutChart} />
          <Route
            exact
            path="/multi-series-line-chart"
            component={MultiSeriesLineChart}
          />
          <Route
            exact
            path="/multi-series-line-chart/animated"
            component={AnimatedMultiSeriesLineChart}
          />
          <footer className="App-footer">
            &copy; 2018 <a href="https://github.com/eva-lam/cddr">CDDR Team</a>
            
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
