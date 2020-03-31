import React from 'react'
import profilePic from '../../images/profilePic.jpg'
import { animated, useSpring } from 'react-spring'
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import './About.css'
import '../../theme.css'

const About = () => {
  // SVG animation
  // const svgSpring = useSpring({
  //   from: { x: 60, opacity: 0 },
  //   to: { x: 120, opacity: 1 },
  //   delay: 9000,
  //   config: { tension: 45, friction: 10, clamp: true }
  // })
  
  return (
    <section
      id="about"
      className="About padded-section"
    >
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring
            delay={9000}
            from={{
              x: 60,
              opacity: 0
            }}
            to={{
              x: 120,
              opacity: 1
            }}
            config={{
              tension: 40,
              friction: 10
            }}
          >
            {({x, opacity}) => 
              <svg
                viewBox="0 0 18 23"
                className="lightning-strike"
                style={{x, opacity}}
                strokeDashoffset={x}
                preserveAspectRatio="none"
              >
                <path
                  fill="none"
                  stroke="rgba(255, 215, 0, 0.5)"
                  strokeWidth=".1"
                  strokeDasharray="60"
                  height="100%"
                  width="100%"
                  d="M7 2v11h3v9"
                />
              </svg>
            }
          </Spring>
        )}
      </VisibilitySensor>
      
      {/* <animated.svg
        viewBox="0 0 18 23"
        className="lightning-strike"
        style={svgSpring}
        strokeDashoffset={svgSpring.x}
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="rgba(255, 215, 0, 0.5)"
          strokeWidth=".1"
          strokeDasharray="60"
          height="100%"
          width="100%"
          d="M7 2v11h3v9"
        />
      </animated.svg> */}
      
      <VisibilitySensor>
        {({ isVisible }) => (
          <div className="about-title-container">
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
                  About
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
                  className="about-underline"
                  style={{transform, opacity}}
                />
              }
            </Spring>
          </div>
        )}
      </VisibilitySensor>
      <div className="about-container">
        <article className="about-info-container">
          <VisibilitySensor offset={{ bottom: -300, top: -300 }}>
            {({ isVisible }) => (
              <Spring
                delay={1200}
                to={{
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {({ opacity }) =>
                  <img
                    style={{opacity}}
                    className="profile-pic"
                    src={profilePic}
                    alt="picture of me"
                  />
                }
              </Spring>
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
                  <p style={{opacity}}>
                    Hey! I'm Russ. I found my passion for clean UI as a kid
                    filming and editing skateboarding videos with my brother. A love of video
                    editing led to learning Adobe Photoshop, and eventually Javascript!
                  </p>
                }
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={900}
                to={{
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {({ opacity }) =>
                  <p style={{opacity}}>
                    A big fan of MMA (love Jiu Jitsu), outdoor activities, creative writing,
                    and spending time with my girlfriend and our little pup!
                  </p>
                }
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={1000}
                to={{
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {({ opacity }) =>
                  <p style={{opacity}}>
                    I am a detail oriented person, immersed in the frontend spectrum, and enjoy
                    working on ambitious projects with a great team. Remote work is preferrable!
                  </p>
                }
              </Spring>
            )}
          </VisibilitySensor>
        </article>
        <div className="about-side">
          <img
            className="placeholder-pic"
            src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1019&q=80"
            alt="placeholder"
          />
        </div>
      </div>
    </section>
  )
}

export default About

