import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../../helpers/scrollToSection';
import { animated, useTrail, useSpring } from 'react-spring';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './Splash.css';

const Splash = () => {
  const [flicker, setFlicker] = useState(null);

  // Create arrays for React Spring to map
  const firstName = [`R`, `u`, `s`, `s`];
  const lastName = [`S`, `t`, `o`, `r`, `m`, `s`];
  const title = `Software Engineer`;

  // First name animation
  const firstNameSpring = useTrail(firstName.length, {
    from: { opacity: 0, x: 0, height: 0 },
    to: { opacity: 1, x: 10, height: 80 },
    config: { tension: 180, friction: 30 },
  });

  // Last name animation
  const lastNameSpring = useTrail(lastName.length, {
    from: { opacity: 0, x: 0, height: 0, color: '#FFFFFF' },
    to: { opacity: 1, x: -20, height: 80, color: '#4682b4' },
    config: { tension: 180, friction: 30 },
  });

  // Title animation
  const titleSpring = useTrail(title, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1500,
    config: { tension: 20, friction: 10 },
  });

  // SVG animation
  const svgSpring = useSpring({
    from: { x: 0, opacity: 0 },
    to: { x: 120, opacity: 1 },
    delay: 2500,
    config: { tension: 25, friction: 10, clamp: true },
  });

  // Arrow animation
  const arrowSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { tension: 20, friction: 10 },
  });

  useEffect(() => {
    const timer = setTimeout(() => setFlicker(true), 4200);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <section className="Splash">
      <animated.svg
        viewBox="0 0 25 25"
        className={`lightning-bolt ${flicker ? 'flicker' : ''}`}
        style={svgSpring}
        strokeDashoffset={svgSpring.x}
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="gold"
          strokeWidth=".5"
          strokeDasharray="60"
          height="100%"
          width="100%"
          d="M7 2v11h3v9l7-12h-4l4-8z"
        />
      </animated.svg>
      <animated.svg
        viewBox="0 0 25 25"
        className={`lightning-bolt-two ${flicker ? 'flicker' : ''}`}
        style={svgSpring}
        strokeDashoffset={svgSpring.x}
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="yellow"
          strokeWidth=".2"
          strokeDasharray="60"
          height="100%"
          width="100%"
          d="M7 2v11h3v9l7-12h-4l4-8z"
        />
      </animated.svg>
      <div className="intro-name-container">
        <div className="intro-first-name">
          {firstNameSpring.map(({ x, height, ...rest }, index) => (
            <animated.div
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
              key={index}
            >
              {firstName[index]}
            </animated.div>
          ))}
        </div>
        <span className="anchor" />
        <div className="intro-last-name">
          {lastNameSpring.map(({ x, height, ...rest }, index) => (
            <animated.div
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0, ${x}px,0)`),
              }}
              key={index}
            >
              {lastName[index]}
            </animated.div>
          ))}
        </div>
      </div>

      <div className="intro-titles">
        {titleSpring.map((animation, index) => (
          <animated.div style={animation} key={index}>
            {title}
          </animated.div>
        ))}
      </div>
      <animated.div
        style={arrowSpring}
        onClick={() => scrollToSection('about')}
        className="arrow-button-container"
      >
        <KeyboardArrowDownIcon
          className="projects-arrow-button"
          fontSize="large"
        />
        <KeyboardArrowDownIcon
          className="projects-arrow-button-two"
          fontSize="large"
        />
      </animated.div>
    </section>
  );
};

export default Splash;
