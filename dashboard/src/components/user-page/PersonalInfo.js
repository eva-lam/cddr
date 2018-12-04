import React from 'react';

import './PersonalInfo.css';

const PersonalInfo = ({
  info = {
    gender: 'Female',
    email: 'account@email.com',
    phone: '+49 12345 6789',
    birthday: '1st Jan 1980',
  },
}) => (
  <div className="personal-info">
    <h2>Personal information</h2>
    <div className="information">
      <div className="field">Gender: {info.gender}</div>
      <div className="field">Birthday: {info.birthday}</div>
      <div className="field">email: {info.email}</div>
      <div className="field">Phone: {info.phone}</div>
    </div>
  </div>
);

export default PersonalInfo;
