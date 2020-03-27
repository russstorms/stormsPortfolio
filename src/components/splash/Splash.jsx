import React, { useState } from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'
import { animated, useTrail, useSpring, config } from 'react-spring'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import './Splash.css'
import '../responsive.css'

const Splash = () => {
  const [ flicker, setFlicker ] = useState(null)

  // Create arrays for React Spring to map
  const firstName = [`R`, `u`, `s`, `s`]
  const lastName = [`S`, `t`, `o`, `r`, `m`, `s`]
  const titles = `Developer / Engineer / Designer`
  const titlesArr = titles.split(' ')

  // First name animation
  const firstNameSpring = useTrail(firstName.length, {
    from: {
      opacity: 0,
      x: 0,
      height: 0,
    },
    to: {
      opacity: 1,
      x: 20,
      height: 80,
    },
    config: { tension: 250, friction: 50 }
  })

  // Last name animation
  const lastNameSpring = useTrail(lastName.length, {
    from: {
      opacity: 0,
      x: 0,
      height: 0,
      color: '#FFFFFF'
    },
    to: {
      opacity: 1,
      x: -20,
      height: 80,
      color: '#4682b4'
    },
    config: { tension: 280, friction: 100 }
  })

  // Title animation
  const titleSpring = useTrail(titlesArr.length, {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1500,
    config: { tension: 20, friction: 10 }
  })

  // SVG animation
  const svgSpring = useSpring({
    from: { x: 0, opacity: 0 },
    to: async next => {
      await next({ x: 120, opacity: 1 })
    },
    delay: 3000,
    config: { tension: 20, friction: 10 }
  })

  // Arrow animation
  const arrowSpring = useSpring({
    from: { opacity: 0 },
    to: async next => {
      await next({ opacity: 1 })
    },
    delay: 500,
    config: { tension: 20, friction: 10 }
  })

  const flickerBolt = setTimeout(() => {
    setFlicker(true)
  }, 5000)

  return (
    <section className="Splash">
      <animated.svg
        viewBox="0 0 25 25"
        className={`lightning-bolt ${flicker ? 'flicker' : ''}`}
        style={svgSpring}
        strokeDashoffset={svgSpring.x}
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="gold"
          strokeWidth=".5"
          strokeDasharray="60"
          height="100%"
          width="100%"
          d="M7 2v11h3v9l7-12h-4l4-8z"
        />
      </animated.svg>
      <animated.svg
        viewBox="0 0 25 25"
        className={`lightning-bolt-two ${flicker ? 'flicker' : ''}`}
        style={svgSpring}
        strokeDashoffset={svgSpring.x}
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="yellow"
          strokeWidth=".2"
          strokeDasharray="60"
          height="100%"
          width="100%"
          d="M7 2v11h3v9l7-12h-4l4-8z"
        />
      </animated.svg>
      <div 
        className="intro-name-container"
      >
        <div
          className="intro-first-name"
        >
          {firstNameSpring.map(({ x, height, ...rest }, index) => (
            <animated.div
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
              key={index}
            >
              {firstName[index]}
            </animated.div>
          ))}
        </div>
        <div
          className="intro-last-name"
        >
          {lastNameSpring.map(({ x, height, ...rest }, index) => (
            <animated.div
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0, ${x}px,0)`) }}
              key={index}
            >
              {lastName[index]}
            </animated.div>
          ))}
        </div>
      </div>
      <div
        className="intro-titles"
      >
        {titleSpring.map((animation, index) => (
          <animated.div
            style={animation}
            key={index}
          >
            {titlesArr[index]}
          </animated.div>
        ))}
      </div>
      <animated.div
        style={arrowSpring}
        onClick={() => scrollToSection('projects')}
        className="arrow-button-container"
      >
        <KeyboardArrowDownIcon
          className="projects-arrow-button"
          fontSize="large"
        />
        <KeyboardArrowDownIcon
          className="projects-arrow-button-two"
          fontSize="large"
        />
      </animated.div>
    </section>
  )
}

export default Splash

