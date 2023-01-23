import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

const Portfolio = () => {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: 'auto',
        marginBottom: '100px',
        overflowX: 'hidden'
      }}
    >
      <Typography
        style={{
          textAlign: 'center',
          marginTop: '50px',
          marginBottom: '50px'
        }}
        variant='h2'
      >
        Portfolio
      </Typography>
      <section data-aos='fade-right'>
        <Grid justify='center' container>
          <a
            href='https://hiking-timeline.onrender.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              style={{
                width: '100%',
                maxWidth: '700px',
                verticalAlign: 'text-bottom'
              }}
              src='portfolio_images/Hiking_Timeline.PNG'
              alt='Hiking Timeline'
            />
          </a>
          <Grid
            style={{
              background: '#e6e6e6',
              maxWidth: '700px'
            }}
            md={12}
            item
          >
            <Typography
              style={{ textAlign: 'center', marginTop: '30px' }}
              variant='h2'
            >
              Hiking Timeline
            </Typography>
            <Typography
              style={{ fontSize: '1.4rem', margin: '15px', marginTop: '30px' }}
            >
              Graphic timeline shows hiking events by date. Create an account to
              add timeline events and upload images. React as a Frontend w/
              Material-UI, Redux for state management, and React Router. Express
              Backend uses MongoDB for database and authentication with firebase
              for image storage, hosted on Render.io. <br />
              <div style={{ textAlign: 'center' }}>
                <Button
                  style={{
                    marginTop: '25px',
                    fontSize: '20px',
                    backgroundColor: '#495057',
                    padding: '5px',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    color: '#e6e6e6'
                  }}
                  href='https://hiking-timeline.onrender.com/'
                  target='_blank'
                >
                  Visit
                </Button>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </section>

      <section data-aos='fade-left'>
        <Grid style={{ marginTop: '100px' }} justify='center' container>
          <a
            href='https://pamtaylorkw.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              style={{
                width: '100%',
                maxWidth: '700px',
                verticalAlign: 'text-bottom'
              }}
              src='portfolio_images/PamWebsite.PNG'
              alt='Inventory App'
            />
          </a>
          <Grid
            style={{
              background: '#e6e6e6',
              maxWidth: '700px'
            }}
            md={12}
            item
          >
            <Typography
              style={{ textAlign: 'center', marginTop: '30px' }}
              variant='h2'
            >
              Real Estate Agent Site
            </Typography>
            <Typography
              style={{ fontSize: '1.4rem', margin: '15px', marginTop: '30px' }}
            >
              Personal advertising website for Pam Taylor. Featuring React
              frontend with pure vanilla CSS. Firebase authentication for
              updating listing and testimonial information. Embeded Keller
              Williams website for search functionality.
              <br />
              <div style={{ textAlign: 'center' }}>
                <Button
                  style={{
                    marginTop: '25px',
                    fontSize: '20px',
                    backgroundColor: '#495057',
                    padding: '5px',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    color: '#e6e6e6'
                  }}
                  target='_blank'
                  href='https://pamtaylorkw.com/'
                >
                  Visit
                </Button>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section
        data-aos='fade-right'
        data-aos-offset='200'
        data-aos-duration='1000'
      >
        <Grid style={{ marginTop: '100px' }} justify='center' container>
          <a
            style={{ background: 'white' }}
            href='https://github.com/zaneecampbell/Conov-website'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              style={{
                width: '100%',
                maxWidth: '700px',
                verticalAlign: 'text-bottom'
              }}
              src='portfolio_images/ChocoNov_Website.png'
              alt='Freelane artist Website'
            ></img>
          </a>
          <Grid
            style={{ background: '#e6e6e6', maxWidth: '700px' }}
            md={12}
            item
          >
            <Typography
              style={{ textAlign: 'center', marginTop: '30px' }}
              variant='h2'
            >
              Digital Artist Portfolio
            </Typography>
            <Typography
              style={{ fontSize: '1.4rem', margin: '15px', marginTop: '30px' }}
            >
              Freelance project, a portfolio website for a twitch
              streamer/digital artists. Built using the MERN stack. Uses
              ReactStrap for styling and React-Router for routing. Email form
              runs server side sent through an online api to request commissions
              from the artists.
              <br />
              <div style={{ textAlign: 'center' }}>
                <Button
                  style={{
                    marginTop: '25px',
                    fontSize: '20px',
                    backgroundColor: '#495057',
                    padding: '5px',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    color: '#e6e6e6'
                  }}
                  target='_blank'
                  href='https://github.com/zaneecampbell/Conov-website'
                >
                  Visit
                </Button>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

export default Portfolio
