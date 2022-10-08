import React from 'react'
import NavBar from './NavBar'
import Intro from './Intro'
import Particles from 'react-particles-js'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Landing = () => {
  // config for particle js background
  const particleConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 700
        }
      },
      color: {
        value: '#9c27b0'
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 15,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#9c27b0',
        opacity: 0.5,
        width: 1
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: false,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 15,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 105,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }

  // smaller screens less particles for performance
  if (window.screen.width < 960) {
    particleConfig.particles.number.value = 25
    particleConfig.particles.line_linked.opacity = 1
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='particle-wrapper'>
        <Intro />
        <Particles className='particle-div' params={particleConfig} />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='portfolio' style={{ margin: '10px' }}>
        <Portfolio />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default Landing
