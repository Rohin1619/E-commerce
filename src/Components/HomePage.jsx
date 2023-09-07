import React from 'react'
import Footer from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

const HomePage = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box sx={ { flexGrow: 1, justifyContent: 'center', justifyItems:'center' } }>
            <Grid container spacing={ 3 }>
              <Grid xs={ 4 } >
                <Item>
                  <Box >
                    <img src='/Icon/Luffy.jpeg' style={{display:'flex', justifyContent:'center', justifyItems:'center'}}/>

                  </Box>
                </Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>Item2</Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>Item 3</Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>Item4</Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>Item4</Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>Item4</Item>
              </Grid>
            </Grid>
          </Box>

        </Container>
      </React.Fragment>
    </>
  )
}
export default HomePage;