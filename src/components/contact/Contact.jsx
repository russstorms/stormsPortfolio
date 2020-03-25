import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'

const Contact = () => {
  return (
    <section
      id="contact"
    >
      <h1>Contact</h1>
      <p>Have a question or want to work together?</p>
      <button onClick={() => scrollToSection('home')}>Back Up</button>
    </section>
  )
}

export default Contact
