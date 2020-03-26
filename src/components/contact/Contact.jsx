import React from 'react'
import { scrollToSection } from '../../helpers/scrollToSection'

import './Contact.css'

const Contact = () => {
  return (
    <section
      className="Contact"
      id="contact"
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
