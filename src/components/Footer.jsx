import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={ { bgcolor: '#csrfsa', height: '20vh' } }>
            <h1>This is content</h1>
          </Box>
        </Container>
      </React.Fragment>
    </>
  )
}

export default Footer
