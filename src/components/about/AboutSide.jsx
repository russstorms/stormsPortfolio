import React from 'react'
import { useSpring, animated } from 'react-spring'
import './About.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const jsTrans = (x, y) => `translate3d(${x / 15}px, ${y / 15}px, 0)`
const reactTrans = (x, y) => `translate3d(${x / 4 + 230}px, ${y / 4 - 230}px, 0)`
const htmlTrans = (x, y) => `translate3d(${x / 3 - 200}px, ${y / 3 - 200}px, 0)`
const cssTrans = (x, y) => `translate3d(${x / 7 - 350}px, ${y / 7 - 50}px, 0)`
const nodeTrans = (x, y) => `translate3d(${x / 5 + 250}px, ${y / 5 + 250}px, 0)`
const sqlTrans = (x, y) => `translate3d(${x / 7 - 250}px, ${y / 7 + 250}px, 0)`
const tsTrans = (x, y) => `translate3d(${x / 4 - 300}px, ${y / 4 - 350}px, 0)`
const phpTrans = (x, y) => `translate3d(${x / 3 + 20}px, ${y / 3 - 350}px, 0)`
const wpTrans = (x, y) => `translate3d(${x / 4 + 70}px, ${y / 4 - 280}px, 0)`

const AboutSide = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="about-side-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="javascript" style={{ transform: props.xy.interpolate(jsTrans) }} />
      <animated.div className="react" style={{ transform: props.xy.interpolate(reactTrans) }} />
      <animated.div className="html" style={{ transform: props.xy.interpolate(htmlTrans) }} />
      <animated.div className="css" style={{ transform: props.xy.interpolate(cssTrans) }} />
      <animated.div className="node" style={{ transform: props.xy.interpolate(nodeTrans) }} />
      <animated.div className="sql" style={{ transform: props.xy.interpolate(sqlTrans) }} />
      <animated.div className="typescript" style={{ transform: props.xy.interpolate(tsTrans) }} />
      <animated.div className="php" style={{ transform: props.xy.interpolate(phpTrans) }} />
      <animated.div className="wordpress" style={{ transform: props.xy.interpolate(wpTrans) }} />
    </div>
  )
}

export default AboutSide

