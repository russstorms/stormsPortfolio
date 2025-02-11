import React, { Suspense } from 'react';
const Splash = React.lazy(() => import('../splash/Splash'));
import Navbar from '../navbar/Navbar';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

import './App.css';
import '../responsive.css';

function App() {
  return (
    <div className="App" id="home">
      <header className="App-header">
        <Suspense fallback={<span />}>
          <Splash />
        </Suspense>
      </header>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
