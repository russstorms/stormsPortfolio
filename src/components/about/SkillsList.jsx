import React from 'react';

import './SkillsList.css';

const SkillsList = () => {
  const frontEndSpecialties = [
    'React',
    'React Native',
    'Redux',
    'Gatsby',
    'Next',
    'HTML',
    'CSS',
    'Sass',
  ];

  const backEndSpecialties = [
    'Express.js',
    'PHP',
    'SQL',
    'GraphQL',
    'Apollo',
    'Socket.io',
  ];

  const storageAndDeploymentSpecialties = [
    'Github',
    'Netlify',
    'NPM',
    'Heroku',
  ];

  return (
    <div className="Skills-List-Container">
      <h2 className="skills-title">Specialties</h2>
      <div className="skills-list">
        {frontEndSpecialties.map((skill, idx) => (
          <div key={idx}>{skill}</div>
        ))}
      </div>
      {/* <div className="skills-list">
        {backEndSpecialties.map((skill, idx) => (
          <div key={idx}>{skill}</div>
        ))}
      </div>
      <div className="skills-list">
        {storageAndDeploymentSpecialties.map((skill, idx) => (
          <div key={idx}>{skill}</div>
        ))}
      </div> */}
    </div>
  );
};

export default SkillsList;
