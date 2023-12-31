import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Box, Container, Grid, Typography, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

import { fetchProducts } from '../stores/slices/productsSlice';
import { addItem } from '../stores/slices/cartSlice';

import { styles } from '../components/styles';

const HomePage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalControl, setModalControl] = useState(false);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setModalControl(!modalControl)
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setModalControl(!modalControl)
  };

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.some((cartItem) => cartItem.id === product.id);

    if (!isProductInCart) {
      dispatch(addItem(product));
      console.log("Product added", product);
    }
  };

  return (
    <>
      <Container>
        <Box sx={ styles.wrapperBox }>
          <Grid key="product-grid" container spacing={ 3 }>
            { products?.products.map((product, index) => (
              <Grid item key={ product.id } xs={ 9 } sm={ 6 } md={ 4 }>

                <Card className="product-card" sx={ {
                  maxWidth: 345, minHeight: 340, '&:hover': {
                    backgroundColor: '#e8f1fb',
                    transition: 'background-color 0.3s',
                  }
                } }>
                  <CardMedia
                    component="img"
                    alt={ product?.title }
                    image={ product?.images[0] }
                    height={ 160 }
                    sx={ { objectFit: 'contain' } }
                  />
                  <CardContent
                    sx={ {
                      objectFit: "contain",
                      flexGrow: 1,
                    } }>
                    <Typography gutterBottom variant="h5" component="div">
                      { product.title }
                    </Typography>
                    <Typography sx={ {
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    } }
                      className="product-description"
                      variant="body2"
                      color="text.secondary"
                    >
                      { product.description }
                    </Typography>
                  </CardContent>
                  <CardActions sx={ { justifyContent: 'space-between', marginTop: 'auto', justifyItems: 'inherit' } }>
                    <IconButton variant="outlined" aria-label='info' color='primary' onClick={ () => handleClickOpen(product) }>
                      <InfoIcon />
                    </IconButton>
                    <Button
                      size="small"
                      onClick={ () => handleAddToCart(product) }
                      disabled={ cartItems.some((cartItem) => cartItem.id === product.id) }
                    >
                      { cartItems.some((cartItem) => cartItem.id === product.id) ? "In Cart" : "Add to Cart" }
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )) }
          </Grid>
        </Box>
      </Container >
      <Dialog onClose={ handleClose } open={ modalControl }>
        <DialogTitle>{ selectedProduct?.title }</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={ handleClose }
          sx={ {
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          } }
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>{ selectedProduct?.description }</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HomePage;
