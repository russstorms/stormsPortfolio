import React from 'react';
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
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiApollographql,
  SiSocketdotio,
  SiNetlify,
  SiDocker,
  SiWebpack,
} from 'react-icons/si';

export const specialities = {
  front: [
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
      icon: <SiNextdotjs />,
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
    {
      id: 5,
      techName: 'Webpack',
      icon: <SiWebpack />,
    },
  ],
  back: [
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
      icon: <SiSocketdotio />,
    },
  ],
  storage: [
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
    {
      id: 4,
      techName: 'Docker',
      icon: <SiDocker />,
    },
  ],
};
