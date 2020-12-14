import React from 'react';
import { DiReact } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import {
  SiRedux,
  SiGatsby,
  SiNextDotJs,
  SiHtml5,
  SiCss3,
  SiSass,
} from 'react-icons/si';

import './SkillsList.css';

const SkillsList = () => {
  const frontEndSpecialties = [
    {
      id: 0,
      techName: 'React',
      icon: <DiReact />,
    },
    {
      id: 1,
      techName: 'Redux',
      icon: <SiRedux />,
    },
    {
      id: 2,
      techName: 'Gatsby',
      icon: <SiGatsby />,
    },
    {
      id: 3,
      techName: 'Next',
      icon: <SiNextDotJs />,
    },
    {
      id: 4,
      techName: 'HTML',
      icon: <SiHtml5 />,
    },
    {
      id: 5,
      techName: 'CSS',
      icon: <SiCss3 />,
    },
    {
      id: 6,
      techName: 'Sass',
      icon: <DiSass />,
    },
  ];

  // const backEndSpecialties = [
  //   'Express.js',
  //   'PHP',
  //   'SQL',
  //   'GraphQL',
  //   'Apollo',
  //   'Socket.io',
  // ];

  // const storageAndDeploymentSpecialties = [
  //   'Github',
  //   'Netlify',
  //   'NPM',
  //   'Heroku',
  // ];

  return (
    <div className="Skills-List-Container">
      <h2 className="skills-title">Specialties</h2>
      <div className="skills-list">
        {frontEndSpecialties.map((skill, idx) => (
          <div key={idx}>
            <div>{skill.icon}</div>
            <h4>{skill.techName}</h4>
          </div>
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
