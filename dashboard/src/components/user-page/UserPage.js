import React from 'react';

import PersonalInfo from './PersonalInfo';
import AdditionalInfo from './AdditionalInfo';
import TechSkills from './TechSkills';

import './UserPage.css';

const UserPage = classes => (
  <div className="user-page">
    <h1>User name</h1>
    <PersonalInfo />
    <AdditionalInfo />
    <TechSkills />
  </div>
);

export default UserPage;
