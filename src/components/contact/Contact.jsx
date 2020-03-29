import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'
import { animated, useSpring } from 'react-spring'
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
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
      className="Contact padded-section"
      id="contact"
    >
      <VisibilitySensor>
        {({ isVisible }) => (
          <div className="contact-title-container">
            <Spring
              delay={300}
              to={{
                transform: isVisible ? 'translate(50px)' : 'translate(-50px)',
                opacity: isVisible ? 1 : 0,
              }}
            >
              {({ transform, opacity }) =>
                <h1
                  className="section-title"
                  style={{transform, opacity}}
                >
                  Contact
                </h1>
              }
            </Spring>
            <Spring
              delay={600}
              to={{
                transform: isVisible ? 'translate(50px)' : 'translate(-50px)',
                opacity: isVisible ? 1 : 0,
              }}
            >
              {({ transform, opacity }) =>
                <div
                  className="contact-underline"
                  style={{transform, opacity}}
                />
              }
            </Spring>
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring
            delay={800}
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {({ opacity }) =>
              <div style={{opacity}}>
                <p>Have a question or want to work together?</p>
                <div
                  className="contact-btn-container"
                >
                  <button
                    className="contact-btn"
                    aria-label="Github.com"
                    onClick={() => window.open('https://github.com/rstorms90')}
                  >
                    <GitHubIcon
                      className="github-icon"
                    />
                  </button>
                  <button
                    className="contact-btn"
                    aria-label="LinkedIn.com"
                    onClick={() => window.open('https://www.linkedin.com/in/russell-storms1003/')}
                  >
                    <LinkedInIcon
                      className="linkedin-icon"
                    />
                  </button>
                </div>
              </div>
            }
          </Spring>
        )}
      </VisibilitySensor>

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

