import React from 'react'
import { useSpring, animated } from "react-spring"

import './Project.css'

const Project = ({ project }) => {
  const [{ y, color}, set] = useSpring(() => ({ y: 100, color: '#FFFFFF' }))

  return (
    <div
      className="project"
      onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
      onMouseLeave={() => set({ y: 100, color: 'gold' })}
    >
      <img
        className="project-image"
        src={`${project.imageSrc}`}
        alt="project"
      />

        <animated.div
          style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
          className="overlay"
        >
          <animated.span
            className="project-text"
            style={{ color }}
          >
            <h5 className="project-name">{project.title}</h5>
            <a href={`${project.url}`} alt="" target="_blank">
              <h6>Site</h6>
            </a>
            {
              project.githubLink !== '' &&
              <a href={`${project.githubLink}`} alt="" target="_blank">
                <h6>Github</h6>
              </a>
            }
            <p>
              {project.description}
            </p>
          </animated.span>
        </animated.div>
    </div>
  )
}

export default Project

