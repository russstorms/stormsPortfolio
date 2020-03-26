import React from 'react'
import Splash from '../splash/Splash'
import Navbar from '../navbar/Navbar'
import About from '../about/About'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'

import './App.css'

function App() {
  return (
    <div 
      className="App"
      id="home"
    >
      <header className="App-header">
        <Splash />
      </header>
      <div
        style={{
          padding: '0 150px'
        }}
      >
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

