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
        className={inView ? 'about-animated visible' : 'about-animated'}
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
          strokeWidth={0.07}
        />
      </svg>
      <svg
        className={inView ? 'about-animated-two visible' : 'about-animated-two'}
        viewBox='0 0 15 24'
        {...props}
      >
        <path
          height="100%"
          width="100%"
          ref={pathRef}
          d="M7 2v11h3v9"
          fill='none'
          stroke='rgba(255, 255, 0, 0.5)'
          strokeWidth={0.03}
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .about-animated {
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 9%;
    right: 0;
    z-index: 0;
    transform: rotate(-60deg);
  }
  .about-animated-two {
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 10%;
    right: 0;
    z-index: 0;
    transform: rotate(-60deg);
  }
  .about-animated.visible, .about-animated-two.visible {
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

  @media (min-width: 600px) {
    .about-animated {
      top: -5%;
    }
    .about-animated-two {
      top: -4%;
    }
  }

  @media (min-width: 700px) {
    .about-animated {
      top: -10%;
    }
    .about-animated-two {
      top: -9%;
    }
  }

  @media (min-width: 800px) {
    .about-animated {
      top: -25%;
    }
    .about-animated-two {
      top: -24%;
    }
  }

  @media (min-width: 1000px) {
    .about-animated {
      top: -45%;
    }
    .about-animated-two {
      top: -43%;
    }
  }

  @media (min-width: 1100px) {
    .about-animated {
      top: -55%;
    }
    .about-animated-two {
      top: -53%;
    }
  }

  @media (min-width: 1200px) {
    .about-animated {
      top: -68%;
    }
    .about-animated-two {
      top: -66%;
    }
  }

  @media (min-width: 1300px) {
    .about-animated {
      top: -79%;
    }
    .about-animated-two {
      top: -77%;
    }
  }

  @media (min-width: 1400px) {
    .about-animated {
      top: -89%;
    }
    .about-animated-two {
      top: -87%;
    }
  }

  @media (min-width: 1500px) {
    .about-animated {
      top: -95%;
    }
    .about-animated-two {
      top: -93%;
    }
  }
`

export default SvgComponent

