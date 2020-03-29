import React from 'react'
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import { projectsData } from '../../projectsData'

import Project from '../project/Project'

import '../../theme.css'
import './Projects.css'

const Projects = () => {
  const projects = projectsData.projects
  console.log(projects)
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
                delay={500}
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
                delay={800}
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
          {projects.map((project) => {
            return (
              <Project
              key={project.id}
              project={project}
            />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Projects

