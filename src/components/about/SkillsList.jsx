import React, { useState } from 'react';
import { specialities } from './specialties';

import './SkillsList.css';

const SkillsList = () => {
  const [selected, setSelected] = useState('front');

  const handleClick = (e) => setSelected(e.target.value);

  const front = 'front';
  const back = 'back';
  const storage = 'storage';

  const data = specialities[selected];

  return (
    <div className="Skills-List">
      <h2 className="skills-title">Specialties</h2>

      <div className="skills-btn-container">
        <Button
          onClick={handleClick}
          value={front}
          selected={selected === front}
        >
          Front-End Technologies
        </Button>

        <Button onClick={handleClick} value={back} selected={selected === back}>
          Back-End Technologies
        </Button>

        <Button
          onClick={handleClick}
          value={storage}
          selected={selected === storage}
        >
          Storage & Deployment
        </Button>
      </div>

      <div className="skills-list">
        {data.map(({ id, icon, techName }) => (
          <div key={id}>
            <div className="skills-icon">{icon}</div>
            <h4 className="skills-name">{techName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const Button = ({ selected, ...props }) => {
  return <button className={selected ? 'active' : ''} {...props} />;
};

export default SkillsList;
