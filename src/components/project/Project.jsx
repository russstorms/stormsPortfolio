import React from 'react'
import { useSpring, animated } from "react-spring"

import './Project.css'

const Project = ({ project }) => {
  const [{ y, color}, set] = useSpring(() => ({ y: 100, color: 'steelblue' }))

  return (
    <div
      className="project"
      onMouseEnter={() => set({ y: 0, color: 'steelblue' })}
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
            <h5
              className="project-name"
            >
              {project.title}
            </h5>
            {
              project.subTitle !== '' &&
              <p>
                {project.subTitle}
              </p>
            }
            {
              project.url !== '' ?
              <a
                className="project-btn"
                href={`${project.url}`}
                alt=""
                target="_blank"
                >
                  View Site
              </a>
              :
              <p
              className="no-link"
            >
              (Not Hosted)
            </p>
            }
            
            {
              project.githubLink !== '' ?
              <a
                className="project-btn"
                href={`${project.githubLink}`}
                alt=""
                target="_blank"
              >
                Github
              </a>
              :
              <p
                className="private-repo"
              >
                (Private Repo)
              </p>
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

