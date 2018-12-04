import React from 'react';

import './TechSkills.css';

const TechSkills = ({ skills = ['Java', 'Javascript', 'Python'] }) => (
  <div className="tech-skills">
    <h2>Tech skills</h2>
    <ul className="list">
      {skills.map(skill => <li className="list-item">{skill}</li>)}
    </ul>
  </div>
);

export default TechSkills;
