import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'

import './Navbar.css'

const Navbar = () => {

  return (
    <section
      className="Navbar"
    >
      <div className="nav-neon-border" />
      <nav
        className="clipped-nav"
      >
        <h4
          className="nav-link"
          onClick={() => scrollToSection('home')}
        >
          Home
        </h4>
        <h4
          className="nav-link"
          onClick={() => scrollToSection('about')}
        >
          About
        </h4>
        <h4
          className="nav-link"
          onClick={() => scrollToSection('projects')}
        >
          Portfolio
        </h4>
        <h4
          className="nav-link"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </h4>
      </nav>
    </section>
  )
}

export default Navbar

