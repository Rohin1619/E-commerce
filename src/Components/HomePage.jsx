import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar';

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
    <NavBar />
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box sx={ { flexGrow: 1, justifyContent: 'center', justifyItems:'center' } }>
            <Grid container spacing={ 3 }>
              <Grid xs={ 4 } >
                <Item>
                  <Box >
                    <Card sx={ { maxWidth: 345 } }>
                      <CardMedia
                        component="img"
                        alt="Enma"
                        height="140"
                        image="/Icon/Luffy.jpeg"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Enma
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Info</Button>
                        <Button size="small">Add to Cart</Button>
                      </CardActions>
                    </Card>

                  </Box>
                </Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>                    <Card sx={ { maxWidth: 345 } }>
                  <CardMedia
                    component="img"
                    alt="zangetsu"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Zangetsu
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Info</Button>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card></Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>                    <Card sx={ { maxWidth: 345 } }>
                  <CardMedia
                    component="img"
                    alt="Excalibur"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Excalibur
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Info</Button>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card></Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>                    <Card sx={ { maxWidth: 345 } }>
                  <CardMedia
                    component="img"
                    alt="samehada"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Samehada
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Info</Button>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card></Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>                    <Card sx={ { maxWidth: 345 } }>
                  <CardMedia
                    component="img"
                    alt="Mjolnir"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Mjolnir
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Info</Button>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card></Item>
              </Grid>
              <Grid xs={ 4 } >
                <Item>                    <Card sx={ { maxWidth: 345 } }>
                  <CardMedia
                    component="img"
                    alt="chastiefol"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Chastiefol
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Info</Button>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card></Item>
              </Grid>
            </Grid>
          </Box>

        </Container>
      </React.Fragment>
    </>
  )
}
export default HomePage;