import React from 'react'
import { useSpring, animated } from "react-spring"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import '../../theme.css'
import './Projects.css'

const Projects = () => {
  const [{ y, color}, set] = useSpring(() => ({ y: 100, color: '#FFFFFF' }))

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
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
          <div
            className="project"
            onMouseEnter={() => set({ y: 0, color: '#FFFFFF' })}
            onMouseLeave={() => set({ y: 100, color: 'gold' })}
          >
            <img src="http://placeimg.com/250/250/animals" alt="project" />

              <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="overlay"
              >
                <animated.span
                  className="project-text"
                  style={{ color }}
                >
                  <h5 className="project-name">Project Name</h5>
                  <a href="" alt="" target="_blank">
                    <h6>Site</h6>
                  </a>
                  <a href="https://www.github.com/rstorms90" alt="" target="_blank">
                    <h6>Github</h6>
                  </a>
                </animated.span>
              </animated.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

