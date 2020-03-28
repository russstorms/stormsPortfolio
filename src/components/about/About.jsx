import React from 'react'
import profilePic from '../../images/profilePic.jpg'

import './About.css'
import '../../theme.css'

const About = () => {
  return (
    <section
      id="about"
      className="About padded-section"
    >
      <h1 className="section-title">About</h1>
      <div className="about-container">
        <article className="about-info-container">
          <img
            className="profile-pic"
            src={profilePic}
            alt="picture of me"
          />
          <p>
            Hey! I'm Russ. I found my passion for clean UI as a kid
            filming and editing skateboarding videos with my brother. A love of video
            editing led to learning Adobe Photoshop, and eventually Javascript!
          </p>
          <p>
            A big fan of MMA (love Jiu Jitsu), outdoor activities, creative writing,
            and spending time with my girlfriend and our little pup!
          </p>
          <p>
            I am a detail oriented person, immersed in the frontend spectrum, and enjoy
            working on ambitious projects with a great team. Remote work is preferrable!
          </p>
        </article>
        <div className="about-side">
          About Side Content Here
          <p>
          Doggo ipsum floofs boof long water shoob you are doing me the shock stop it fren noodle horse borkdrive,
          the neighborhood pupper noodle horse sub woofer floofs snoot ruff, smol borking doggo with a long snoot for pats
          fat boi boofers smol borking doggo with a long snoot for pats ruff. Snoot long bois sub woofer super chub mlem super chub,
          shooberino woofer porgo very jealous pupper clouds, I am bekom fat h*ck heckin good boys thicc. Big ol pupper such treat
          adorable doggo heckin good boys doggo, doge most angery pupper I have ever seen fat boi. Wrinkler bork the neighborhood pupper
          boof woofer bork, wrinkler tungg very taste wow very good spot. yapper heck. fluffer you are doing me a frighten.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

