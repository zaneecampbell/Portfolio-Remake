import React from 'react'
import Typography from '@material-ui/core/Typography'

const Intro = () => {
  return (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: '300',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '20%',
        margin: 'auto',
        maxWidth: '500px'
      }}
    >
      {/* <img
        style={{ maxWidth: '200px', textAlign: 'center' }}
        src='/me.png'
        alt='Profile of Zane.'
      /> */}
      <div style={{ marginRight: '15px', marginLeft: '15px' }}>
        <Typography
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: '300'
          }}
        >
          Hi, I'm Zane. An aspiring web developer.
        </Typography>
      </div>
    </div>
  )
}

export default Intro

// Add Portfolio picture
