import React, { useState } from 'react'
import { animated, useTrail } from 'react-spring'
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import { projectsData } from '../../projectsData'
import Project from '../project/Project'

import '../../theme.css'
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)

  // Project cards animation
  const projectsTrail = useTrail(projects.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 40, friction: 10 }
  })


  return (
    <div
      className="Projects"
    >
      <section
        id="projects"
        className="wide-padded-section"
      >
        <VisibilitySensor>
          {({ isVisible }) => (
            <div className="projects-title-container">
              <Spring
                delay={300}
                to={{
                  transform: isVisible ? 'translate(-50px)' : 'translate(50px)',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {({ transform, opacity }) =>
                  <h1
                    className="section-title projects-title"
                    style={{transform, opacity}}
                  >
                    Projects
                  </h1>
                }
              </Spring>
              <Spring
                delay={600}
                to={{
                  transform: isVisible ? 'translate(-50px)' : 'translate(50px)',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {({ transform, opacity }) =>
                  <div
                    className="projects-underline"
                    style={{transform, opacity}}
                  />
                }
              </Spring>
            </div>
          )}
        </VisibilitySensor>

        <div
          className="projects-container"
        >
          {projectsTrail.map((props, index) => (
            <animated.div
              key={projects[index].id}
              style={props}
            >
              <Project
                id={projects[index].id}
                project={projects[index]}
              />
              {projects[index].project}
            </animated.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects

