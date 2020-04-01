import React from 'react'
import { useSpring, animated } from 'react-spring'
import './About.css'

const AboutAside = () => {
  const props = useSpring({
    from: { opacity: 0, left: '0%', top: '0%', width: '0%', height: '0%', background: 'lightgreen' },
    to: async next => {
      while (1) {
        await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: 'steelblue', opacity: 1 })
        await next({ height: '50%', background: 'skyblue' })
      }
    },
  })
  return <animated.div className="script-box" style={props} />
}

export default AboutAside

