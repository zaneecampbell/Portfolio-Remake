import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'

const Contact = () => {
  const [emailData, setEmailData] = useState({
    email: '',
    name: '',
    text: ''
  })

  const { email, name, text } = emailData

  const onChange = e => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value })
  }

  // Send an email to host
  // const onSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     };

  //     const body = JSON.stringify({ email, name, text });
  //     await axios.post('/api/email/', body, config);
  //     console.log('success!');
  //     setEmailData({ ...emailData, email: '', name: '', text: '' });
  //   } catch (err) {
  //     console.log(err.response.statusText);
  //   }
  // };

  return (
    <div style={{ background: '#e6e6e6' }}>
      <Typography
        style={{ paddingTop: '25px', textAlign: 'center' }}
        variant='h2'
      >
        Contact Me
      </Typography>
      <div
        style={{
          maxWidth: '600px',
          margin: 'auto',
          paddingBottom: '25px',
          paddingTop: '25px'
        }}
      >
        <form>
          <Grid container justify='center' spacing={0}>
            <Grid xs={10} lg={12} item>
              <TextField
                style={{
                  fontSize: '25px',
                  margin: '5px',
                  width: '100%'
                }}
                variant='outlined'
                type='email'
                value={email}
                name='email'
                placeholder='Email here'
                onChange={e => onChange(e)}
                autoComplete='off'
              />
            </Grid>
            <Grid xs={10} lg={12} item>
              <TextField
                style={{
                  fontSize: '25px',
                  margin: '5px',
                  width: '100%'
                }}
                variant='outlined'
                type='name'
                value={name}
                name='name'
                placeholder='Company/Name'
                onChange={e => onChange(e)}
                autoComplete='off'
                required
              />
            </Grid>
            <Grid xs={10} lg={12} item>
              <TextField
                style={{
                  fontSize: '25px',
                  margin: '5px',
                  width: '100%'
                }}
                variant='outlined'
                type='text'
                multiline
                rows='4'
                value={text}
                name='text'
                placeholder="Let me know what's up"
                onChange={e => onChange(e)}
                autoComplete='off'
                required
              />
            </Grid>
          </Grid>
          <Grid xs={11} md={11} lg={12} style={{ textAlign: `right` }} item>
            <a
              style={{ textDecoration: 'none' }}
              href={`mailto:ZaneGitInit@gmail.com?subject=Contact Zane&body=Email:${email}, Name:${name}, Message:${text}`}
            >
              <Button
                style={{
                  marginTop: '25px',
                  fontSize: '20px',
                  backgroundColor: '#495057',
                  padding: '5px',
                  color: '#e6e6e6'
                }}
              >
                Submit
              </Button>
            </a>
          </Grid>
        </form>
      </div>
    </div>
  )
}

export default Contact
