import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import InfoIcon from '@mui/icons-material/Info';
import { styles } from './styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProductCard = () => {
    const products = useSelector((state) => state.products.products);
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart = (product) => {
        const isProductInCart = cartItems.some((cartItem) => cartItem.id === product.id);

        if (!isProductInCart) {
            dispatch(addItem(product));
            console.log("Product added", product);
        }
    };
    
    const handleClickOpen = (product) => {
        setSelectedProduct(product);
        setModalControl(!modalControl)
    };

    return (
        <Container>
        <Box sx={ styles.wrapperBox }>
        <Grid key="product-grid" container spacing={ 3 }>
          { products?.products.map((product, index) => (
              <Grid key={ product.id } xs={ 9 } sm={ 6 } md={ 4 }>
                  <Item>
                      <Card sx={ { maxWidth: 345 } }>
                          <CardMedia
                              component="img"
                              alt={ product?.title }
                              height="140"
                              image={ product?.images[0] }
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  { product.title }
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  { product.description }
                              </Typography>
                          </CardContent>
                          <IconButton variant="outlined" aria-label='info' color='primary' onClick={ () => handleClickOpen(product) }>
                              <InfoIcon />
                          </IconButton>
                          <Button
                              size="small"
                              onClick={ () => handleAddToCart(product) }
                              disabled={ cartItems.some((cartItem) => cartItem.id === product.id) } // Disable if already in cart
                          >
                              { cartItems.some((cartItem) => cartItem.id === product.id) ? "In Cart" : "Add to Cart" }
                          </Button>
                      </Card>
                  </Item>
              </Grid>
          )) }
      
    </Grid>
    </Box>
        </Container>
  )
}

export default ProductCard
