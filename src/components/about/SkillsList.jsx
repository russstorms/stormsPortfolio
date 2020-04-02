import React from 'react'
import { animated, useTrail } from 'react-spring'

import './SkillsList.css'

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
  ]

  // Skills animation
  const skillsSpring = useTrail(skillList.length, {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: { tension: 250, fricton: 50 }
  })

  return (
    <div
      className="Skills-List-Container"
    >
      <h2 className="skills-title">Skills</h2>
      <ul
        className="skills-list"
      >
        {skillsSpring.map(({ opacity }, index) => (
          <animated.div
            style={{ opacity }}
            key={index}
          >
            <li>
              {skillList[index]}
            </li>
          </animated.div>
        ))}
      </ul>
    </div>
  )
}

export default SkillsList

