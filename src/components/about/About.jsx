import React from 'react'

import './About.css'
import '../../theme.css'

const About = () => {
  return (
    <section
      id="about"
      className="About padded-section"
    >
      <h1 className="section-title">About Me</h1>
      <article className="about-info-container">
        <img
          className="profile-pic"
          src="http://placeimg.com/240/240/animals"
          alt="picture of me"
        />
        <p>
          Hey! I'm Russ, and I found my passion for clean UI when I was a kid
          making and editing skateboarding videos with my brother. A love of video
          editing led to learning Adobe Photoshop, and eventually Javascript!
        </p>
        <p>
          A big fan of MMA (love Jiu Jitsu), outdoor activities, creative writing,
          and spending time with my girlfriend and our little pup!
        </p>
        <p>
          I am a detailed oriented person, immersed in the frontend spectrum, and enjoy
          working on ambitious projects with a great team. Remote work is preferrable!
        </p>
      </article>
      <div>

      </div>
    </section>
  )
}

export default About

