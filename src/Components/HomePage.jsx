import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CssBaseline, Container, Grid, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import NavBar from './NavBar';
import { fetchProducts } from '../stores/slices/productsSlice';
import { addItem } from '../stores/slices/cartSlice';

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setOpen(false);
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
      <NavBar />
      <CssBaseline />
      <Container>
        <Box sx={ { flexGrow: 1, justifyContent: 'center', justifyItems: 'center', mt: 5 } }>
          <Grid key="product-grid" container spacing={ 3 }>
            { products.products.map((product, index) => (
              <Grid key={ product.id } xs={ 9 } sm={ 6 } md={ 4 }>
                <Item>
                  <Card sx={ { maxWidth: 345 } }>
                    <CardMedia
                      component="img"
                      alt={ product.title }
                      height="140"
                      image={ product.images[0] }
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
                      <InfoIcon/>
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
      { selectedProduct && (
        <ProductDialog
          open={ open }
          onClose={ handleClose }
          product={ selectedProduct }
        />
      ) }
    </>
  );
};

const ProductDialog = ({ open, onClose, product }) => {
  return (
    <Dialog onClose={ onClose } open={ open }>
      <DialogTitle>{ product.title }</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ onClose }
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
        <Typography gutterBottom>{ product.description }</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default HomePage;
