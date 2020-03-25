import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'

const Navbar = () => {

  return (
    <section>
      <h1>Navbar</h1>
      <nav
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        cursor: 'pointer',
      }}
      >
        <h4 onClick={() => scrollToSection('home')}>Home</h4>
        <h4 onClick={() => scrollToSection('about')}>About</h4>
        <h4 onClick={() => scrollToSection('projects')}>Portfolio</h4>
        <h4 onClick={() => scrollToSection('contact')}>Contact</h4>
      </nav>
    </section>
  )
}

export default Navbar

