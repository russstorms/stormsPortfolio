import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'
import { animated, useSpring, } from 'react-spring'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import './Contact.css'

const Contact = () => {
  // Arrow animation
  const arrowSpring = useSpring({
    from: { opacity: 0 },
    to: async next => {
      await next({ opacity: 1 })
    },
    delay: 500,
    config: { tension: 20, friction: 10 }
  })

  return (
    <section
      className="Contact"
      id="contact"
    >
      <h1 className="section-title">Contact</h1>
      <p>Have a question or want to work together?</p>
      <GitHubIcon
        className="github-icon"
        aria-label="Github.com"
        onClick={() => window.open('https://github.com/rstorms90')}
      />
      <LinkedInIcon
        className="linkedin-icon"
        aria-label="LinkedIn.com"
        onClick={() => window.open('https://www.linkedin.com/in/russell-storms1003/')}
      />
      <animated.div
        style={arrowSpring}
        onClick={() => scrollToSection('home')}
        className="arrow-button-container"
      >
        <KeyboardArrowUpIcon
          className="projects-arrow-button"
          fontSize="large"
        />
        <KeyboardArrowUpIcon
          className="projects-arrow-button-two"
          fontSize="large"
        />
      </animated.div>
    </section>
  )
}

export default Contact

