import React, { useState, createRef, useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const SvgComponent = (props) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true
  })
  const pathRef = createRef()
  const [pathLength, setPathLength] = useState()

  useEffect(
    () => {
      if (pathRef.current) {
        setPathLength(pathRef.current.getTotalLength())
      }
    },
    [pathRef]
  )

  return (
    <Wrapper
      ref={inViewRef}
      pathLength={pathLength}
    >
      <svg
        className={inView ? 'animated visible' : 'animated'}
        viewBox='0 0 15 24'
        {...props}
      >
        <path
          height="100%"
          width="100%"
          ref={pathRef}
          d="M7 2v11h3v9"
          fill='none'
          stroke='rgba(255, 215, 0, 0.5)'
          strokeWidth={0.1}
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .animated {
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
    max-width: 100%;
    height: auto;
    position: absolute;
    top: -70%;
    right: 0;
    z-index: 0;
    transform: rotate(-60deg);
  }
  .animated.visible {
    animation: draw .2s linear forwards;
    animation-delay: 2s;
  }
  @keyframes draw {
    from {
      stroke-dashoffset: ${(props) => props.pathLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default SvgComponent

