import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import '../../theme.css'
import './Projects.css'
import 'animate.css/animate.min.css'

const Projects = () => {
  return (
    <div
      className="Projects"
    >
      <section
        id="projects"
        className="padded-section"
      >
        <h1>Projects</h1>
        <div
          className="projects-container"
        >
          <div className="project">
            <h4>Project Title</h4>
            <h5>Project Tech</h5>
            <img src="https://www.fillmurray.com/240/160" alt="project" />
            <p>Github Link</p>
            <p>Website Link</p>
          </div>
          <div className="project">
            <h4>Project Title</h4>
            <h5>Project Tech</h5>
            <img src="https://www.fillmurray.com/240/160" alt="project" />
            <p>Github Link</p>
            <p>Website Link</p>
          </div>
          <div className="project">
            <h4>Project Title</h4>
            <h5>Project Tech</h5>
            <img src="https://www.fillmurray.com/240/160" alt="project" />
            <p>Github Link</p>
            <p>Website Link</p>
          </div>
          <div className="project">
            <h4>Project Title</h4>
            <h5>Project Tech</h5>
            <img src="https://www.fillmurray.com/240/160" alt="project" />
            <p>Github Link</p>
            <p>Website Link</p>
          </div>
          <div className="project">
            <h4>Project Title</h4>
            <h5>Project Tech</h5>
            <img src="https://www.fillmurray.com/240/160" alt="project" />
            <p>Github Link</p>
            <p>Website Link</p>
          </div>
          <div className="project">
            <h4>Project Title</h4>
            <h5>Project Tech</h5>
            <img src="https://www.fillmurray.com/240/160" alt="project" />
            <p>Github Link</p>
            <p>Website Link</p>
          </div>
        </div>
      </section>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="sun"></div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="mountain-one"></div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="mountain-four"></div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="mountain-three"></div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="mountain-two"></div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="mountain-fg-one"></div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="mountain-fg-two"></div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="river"></div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
      >
        <div className="trees-one"></div>
      </ScrollAnimation>
    </div>
  )
}

export default Projects

