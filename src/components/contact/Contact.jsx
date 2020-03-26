import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        paddingBottom: '50px'
      }}
    >
      <h1>Contact</h1>
      <p>Have a question or want to work together?</p>
      <h6>Github</h6>
      <h6>LinkedIn</h6>
      <button onClick={() => scrollToSection('home')}>Back Up</button>
    </section>
  )
}

export default Contact
