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
        className={inView ? 'contact-animated visible' : 'contact-animated'}
        viewBox='0 0 25 22'
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
      <svg
        className={inView ? 'contact-animated-two visible' : 'contact-animated-two'}
        viewBox='0 0 25 22'
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
  .contact-animated {
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 56%;
    right: -30%;
    z-index: 0;
    transform: rotate(65deg);
  }
  .contact-animated-two {
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 57%;
    right: -30%;
    z-index: 0;
    transform: rotate(65deg);
  }
  .contact-animated.visible, .contact-animated-two.visible {
    animation: draw .1s linear forwards;
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
    .contact-animated {
      top: 34%;
    }
    .contact-animated-two {
      top: 35%;
      right: -31%;
    }
  }

  @media (min-width: 700px) {
    .contact-animated {
      top: 15%;
    }
    .contact-animated-two {
      top: 16%;
      right: -31%;
    }
  }

  @media (min-width: 1000px) {
    .contact-animated {
      top: -5%;
    }
    .contact-animated-two {
      top: -4%;
    }
  }

  @media (min-width: 1100px) {
    .contact-animated {
      top: -15%;
    }
    .contact-animated-two {
      top: -14%;
    }
  }

  @media (min-width: 1200px) {
    .contact-animated {
      top: -25%;
    }
    .contact-animated-two {
      top: -24%;
    }
  }

  @media (min-width: 1300px) {
    .contact-animated {
      top: -35%;
    }
    .contact-animated-two {
      top: -34%;
    }
  }

  @media (min-width: 1400px) {
    .contact-animated {
      top: -45%;
      right: -40%;
    }
    .contact-animated-two {
      top: -44%;
      right: -41%;
    }
  }

  @media (min-width: 1500px) {
    .contact-animated {
      top: -55%;
    }
    .contact-animated-two {
      top: -54%;
    }
  }
`

export default SvgComponent

