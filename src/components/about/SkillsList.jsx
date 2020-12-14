import React from 'react';

import './SkillsList.css';

const SkillsList = () => {
  const skillList = [
    `HTML5`,
    `CSS`,
    `Javscript`,
    `Typescript`,
    `React`,
    `React Native`,
    `Node`,
    `SQL`,
    `GraphQL`,
    `Gatsby`,
    `PHP`,
    `Wordpress`,
    `Version Control`,
  ];

  return (
    <div className="Skills-List-Container">
      <h2 className="skills-title">Specialties</h2>
      <div className="skills-list">
        {skillList.map((skill, idx) => (
          <div key={idx}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
