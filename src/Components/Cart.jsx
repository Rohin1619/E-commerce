import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../stores/slices/counterSlice";
import { addItem, removeItem } from "../stores/slices/cartSlice";
import {
  Box,
  CssBaseline,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

const Cart = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("YOUR_API_ENDPOINT")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products: ", error));
  }, []);


  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId));
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems); 
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={ { mt: 5 } }>
        <Box sx={ { flexGrow: 1 } }>
          <Typography variant="h3" gutterBottom
          sx={{justifyContent:"center", justifyItems:"center"}}>
            Your Products
          </Typography>
          <Grid container spacing={ 2 }>
            <Grid xs={ 8 }>
              { products.map((product, index) => (
                <div key={ product.id }>
                  <Typography>{ product.name }</Typography>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={ () => handleAddToCart(product) }
                  >
                    Add to Cart
                  </Button>
                </div>
              )) }
            </Grid>
            <Grid xs={ 4 }>

              <Box>
                <Fab
                  color="primary"
                  size="small"
                  aria-label="Increment value"
                  onClick={ () => dispatch(increment()) }
                  sx={ { marginLeft: 2, mr: 2 } }>
                  <AddIcon />
                </Fab>
                <span>{ count }</span>
                <Fab
                  color="primary"
                  size="small"
                  aria-label="Decrement value"
                  onClick={ () => dispatch(decrement()) }
                  sx={ { marginLeft: 2 } }>
                  <RemoveIcon />
                </Fab>

                <Fab
                  color="primary"
                  size="small"
                  aria-label="Decrement value"
                  onClick={ () => handleRemoveFromCart(product.id) }
                  sx={ { marginLeft: 6 , bgcolor:"red"} }>
                  <DeleteIcon />
                </Fab>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Cart;
