import React from 'react';

import './AdditionalInfo.css';

const AdditionalInfo = ({
  info = {
    location: 'Berlin',
    laptop: true,
    profession: 'IT Support',
    group: 'none',
  },
}) => (
  <div className="additional-info">
    <h2>Additional information</h2>
    <div className="information">
      <div className="field">Location: {info.location}</div>
      <div className="field">Laptop: {info.laptop}</div>
      <div className="field">Profession: {info.profession}</div>
      <div className="field">Group: {info.group}</div>
    </div>
  </div>
);

export default AdditionalInfo;
