import React from 'react'

import '../../theme.css'
import './Projects.css'

const Projects = () => {
  return (
    <div
      className="Projects"
    >
      <section
        id="projects"
        className="padded-section"
      >
        <h1 className="section-title projects-title">Projects</h1>
        <div
          className="projects-container"
        >
          <div className="project">
            <img src="http://placeimg.com/180/180/animals" alt="project" />
          </div>
          <div className="project">
            <img src="http://placeimg.com/180/180/animals" alt="project" />
          </div>
          <div className="project">
            <img src="http://placeimg.com/180/180/animals" alt="project" />
          </div>
          <div className="project">
            <img src="http://placeimg.com/180/180/animals" alt="project" />
          </div>
          <div className="project">
            <img src="http://placeimg.com/180/180/animals" alt="project" />
          </div>
          <div className="project">
            <img src="http://placeimg.com/180/180/animals" alt="project" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

