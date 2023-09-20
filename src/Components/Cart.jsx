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
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleCartAddSubtract = (type) => {
    if (type === 'ADD') {
      dispatch(increment())
    }
    else if (type === 'SUBTRACT') {
      dispatch(decrement())
    }
    else return null;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={ { mt: 5 } }>
        <Box sx={ { flexGrow: 1 } }>
          <Typography variant="h3" gutterBottom sx={ { justifyContent: "center", justifyItems: "center" } }>
            Your Products
          </Typography>

          <Box sx={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '1px 0' } }>
            <Typography variant="h6">Products</Typography>
            <Typography variant="h6">Price</Typography>
            <Typography variant="h6" sx={{mr:10}}>Quantity</Typography>
          </Box>

          { cartItems.map((cartItem) => {
            console.log(cartItem)
            return (
              <Box key={ cartItem.id } sx={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' } }>
                <div>
                  <Typography>{ cartItem.title }</Typography>
                </div>
                <Typography>{ cartItem.price }</Typography>
                <Box sx={ { display: 'flex', alignItems: 'center' } }>
                  <Fab
                    color="primary"
                    size="small"
                    aria-label="Increment value"
                    onClick={ () => handleCartAddSubtract('ADD') }
                    sx={ { marginRight: 2 } }
                  >
                    <AddIcon />
                  </Fab>
                  <span>{ count }</span>
                  <Fab
                    color="primary"
                    size="small"
                    aria-label="Decrement value"
                    onClick={ () => handleCartAddSubtract('SUBTRACT') }
                    sx={ { marginLeft: 2, marginRight: 2 } }
                  >
                    <RemoveIcon />
                  </Fab>

                  <Fab
                    color="primary"
                    size="small"
                    aria-label="Decrement value"
                    onClick={ () => handleRemoveFromCart(cartItem.id) }
                    sx={ { bgcolor: "red" } }
                  >
                    <DeleteIcon />

                  </Fab>
                </Box>
              </Box>
            )
          }) }
          <Box sx={ { display: "flex", justifyContent: "right", mt:5 } }>
            <Button variant="contained" sx={{borderRadius:12}}>Checkout</Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Cart;
