import React, { useEffect } from 'react';
import { scrollToSection } from '../../helpers/scrollToSection';

import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;
    const scrollCallback = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);

  return (
    <div className="nav-wrapper">
      <section className="Navbar" id="navbar">
        <div className="nav-neon-border" />
        <nav className="clipped-nav">
          <h4 className="nav-link" onClick={() => scrollToSection('home')}>
            Home
          </h4>
          <h4 className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </h4>
          <h4 className="nav-link" onClick={() => scrollToSection('projects')}>
            Portfolio
          </h4>
          <h4 className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </h4>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
