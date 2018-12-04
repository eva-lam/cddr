import React from 'react';
import {Link } from 'react-router-dom';
import {Search} from './components/Search'; 
import logo from '../../cddr.png'; 

export default () => (
  <div className="App-intro">
   <img src={logo} alt="CDDR logo"/>
  <h2>CDDR data dashboard</h2>
        <div>
            <div className="col-xs-5 col-xs-offset-1">
              <Search/>
            </div>
        </div>
        
    <h4>Female: 43.22%</h4>
    <h4>Male: 56.35%</h4>
    <h4>Students: 23.63%</h4>
    <h4>Unemployed: 16.4%</h4>
    <h4>Employed: 18.16%</h4>
    <h4> <Link to="/bar-chart">City Distribution Chart</Link></h4>
    <h4><Link to="/donut-chart">Students'interests Chart</Link> </h4>
    <h4><Link to="/donut-chart">Level of Experience Chart</Link></h4>
    <h4><Link to="/donut-chart">Marketing Traffic</Link></h4>

  </div>
);
