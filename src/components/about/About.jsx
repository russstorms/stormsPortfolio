import React from 'react';
import profilePic from '../../images/profilePic.jpg';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';

import Strike from '../strike-svg/Strike';
import SkillsList from './SkillsList';

import './About.css';
import '../../theme.css';

const About = () => {
  return (
    <section id="about" className="About padded-section">
      <Strike />
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
              {({ transform, opacity }) => (
                <h1 className="section-title" style={{ transform, opacity }}>
                  About
                </h1>
              )}
            </Spring>
            <Spring
              delay={600}
              to={{
                transform: isVisible ? 'translate(50px)' : 'translate(-50px)',
                opacity: isVisible ? 1 : 0,
              }}
            >
              {({ transform, opacity }) => (
                <div
                  className="about-underline"
                  style={{ transform, opacity }}
                />
              )}
            </Spring>
          </div>
        )}
      </VisibilitySensor>
      <div className="about-container">
        <article className="about-info-container">
          <VisibilitySensor offset={{ bottom: -300, top: -300 }}>
            {({ isVisible }) => (
              <Spring
                delay={1000}
                to={{
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {({ opacity }) => (
                  <img
                    style={{ opacity }}
                    className="profile-pic"
                    src={profilePic}
                    alt="me"
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <div>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  delay={500}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {({ opacity }) => (
                    <p style={{ opacity }} className="about-paragraph">
                      Hey! I'm Russ. I found my passion for clean UI as a kid
                      filming and editing skateboarding videos with my brother.
                      A love of video editing led to learning Adobe Photoshop,
                      and eventually Javascript!
                    </p>
                  )}
                </Spring>
              )}
            </VisibilitySensor>

            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  delay={550}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {({ opacity }) => (
                    <p style={{ opacity }} className="about-paragraph">
                      A big fan of MMA (love Jiu Jitsu), outdoor activities,
                      creative writing, and spending time with my girlfriend and
                      our little pup!
                    </p>
                  )}
                </Spring>
              )}
            </VisibilitySensor>

            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  delay={600}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {({ opacity }) => (
                    <p style={{ opacity }} className="about-paragraph">
                      I am a detail oriented person, immersed in the frontend
                      spectrum, and enjoy working on ambitious projects with a
                      great team. Remote work is preferable!
                    </p>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </article>
      </div>

      <VisibilitySensor offset={{ bottom: -300, top: -300 }}>
        {({ isVisible }) => (
          <Spring
            delay={500}
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {({ opacity }) => (
              <div style={{ opacity }} className="about-side">
                <SkillsList />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </section>
  );
};

export default About;
