import React, { useState } from 'react';
import {
  DiReact,
  DiSass,
  DiNodejs,
  DiPhp,
  DiPostgresql,
  DiGit,
  DiNpm,
  DiHeroku,
} from 'react-icons/di';
import {
  SiRedux,
  SiGatsby,
  SiNextDotJs,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiApollographql,
  SiSocketDotIo,
  SiNetlify,
} from 'react-icons/si';

import './SkillsList.css';

const SkillsList = () => {
  const [specialties, setSpecialties] = useState('Front');

  const switchSpecialties = (e) =>
    setSpecialties(e.target.getAttribute('data-val'));

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

  const backEndSpecialties = [
    {
      id: 0,
      techName: 'Node',
      icon: <DiNodejs />,
    },
    {
      id: 1,
      techName: 'PHP',
      icon: <DiPhp />,
    },
    {
      id: 2,
      techName: 'SQL',
      icon: <DiPostgresql />,
    },
    {
      id: 3,
      techName: 'GraphQL',
      icon: <SiGraphql />,
    },
    {
      id: 4,
      techName: 'Apollo',
      icon: <SiApollographql />,
    },
    {
      id: 5,
      techName: 'Socket.io',
      icon: <SiSocketDotIo />,
    },
  ];

  const storageAndDeploymentSpecialties = [
    {
      id: 0,
      techName: 'Github',
      icon: <DiGit />,
    },
    {
      id: 1,
      techName: 'Netlify',
      icon: <SiNetlify />,
    },
    {
      id: 2,
      techName: 'NPM',
      icon: <DiNpm />,
    },
    {
      id: 3,
      techName: 'Heroku',
      icon: <DiHeroku />,
    },
  ];

  const setSpecialtyArray = () => {
    let specialtyArray;

    if (specialties === 'Front') {
      specialtyArray = frontEndSpecialties;
    } else if (specialties === 'Back') {
      specialtyArray = backEndSpecialties;
    } else if (specialties === 'Storage') {
      specialtyArray = storageAndDeploymentSpecialties;
    }

    return specialtyArray;
  };

  return (
    <div className="Skills-List">
      <h2 className="skills-title">Specialties</h2>

      <div className="skills-btn-container">
        <button
          onClick={(e) => switchSpecialties(e)}
          data-val="Front"
          className={specialties === 'Front' ? `active` : ''}
        >
          Front-End Technologies
        </button>

        <button
          onClick={(e) => switchSpecialties(e)}
          data-val="Back"
          className={specialties === 'Back' ? `active` : ''}
        >
          Back-End Technologies
        </button>

        <button
          onClick={(e) => switchSpecialties(e)}
          data-val="Storage"
          className={specialties === 'Storage' ? `active` : ''}
        >
          Storage & Deployment
        </button>
      </div>

      <div className="skills-list">
        {setSpecialtyArray().map((skill) => (
          <div key={skill.id}>
            <div className="skills-icon">{skill.icon}</div>
            <h4 className="skills-name">{skill.techName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
