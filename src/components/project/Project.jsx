import React, { useState } from 'react'
import { useSpring, animated } from "react-spring"

import './Project.css'

const Project = () => {
  const [{ y, color}, set] = useSpring(() => ({ y: 100, color: '#FFFFFF' }))

  return (
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
  )
}

export default Project