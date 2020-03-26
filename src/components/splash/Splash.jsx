import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'

import './Splash.css'

const Splash = () => {

  return (
    <section className="Splash">
      <h1>Hey! I'm Russ Storms</h1>
      <h5>Developer | Engineer | Designer</h5>
      <button 
        onClick={() => scrollToSection('projects')}>
          View my work
      </button>
    </section>
  )
}

export default Splash

