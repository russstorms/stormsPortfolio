import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'
import { animated, useTrail, config } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'

import './Splash.css'

const Splash = () => {
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

  return (
    <section className="Splash">
      <Spring
        delay="3500"
        from={{
          x: 0,
          opacity: 0,
        }}
        to={{
          x: 120,
          opacity: 1,
        }}
      >
        {props => (
          <svg
            style={{
              opacity: 0
            }}
            className="lightning-bolt"
            strokeDashoffset={props.x}
          >
            <path
              fill="none"
              stroke="gold"
              stroke-width="2"
              strokeDasharray="60"
              height="100%"
              width="100%"
              d="M7 2v11h3v9l7-12h-4l4-8z"
            />
          </svg>
        )}
      </Spring>
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
      <div
        className="arrow-button-container"
      >
        <DoubleArrowIcon
          onClick={() => scrollToSection('projects')}
          className="projects-arrow-button"
          fontSize="large"
        />
      </div>
    </section>
  )
}

export default Splash

