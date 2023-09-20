import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, saveCart } from "../stores/slices/cartSlice";
import {
  Box,
  CssBaseline,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [productCounts, setProductCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const initialCounts = {};
    cartItems.forEach((cartItem) => {
      initialCounts[cartItem.id] = 1;
    });
    setProductCounts(initialCounts);
  }, [cartItems]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleCartAddSubtract = (productId, type) => {
    const updatedCounts = { ...productCounts };
    if (type === 'ADD') {
      updatedCounts[productId]++;
    } else if (type === 'SUBTRACT' && updatedCounts[productId] > 0) {
      updatedCounts[productId]--;
    }
    setProductCounts(updatedCounts);
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleCheckout = () => {
    dispatch(saveCart(cartItems));
    navigate("payment");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={ { mt: 5, bgcolor: "e8f1fb" } }>
        <Box sx={ { flexGrow: 1 } }>
          <Typography variant="h3" gutterBottom sx={ { justifyContent: "center", justifyItems: "center" } }>
            Your Products
          </Typography>

          <Box sx={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '1px 0' } }>
            <Typography variant="h6">Products</Typography>
            <Typography variant="h6">Price</Typography>
            <Typography variant="h6" sx={ { mr: 10 } }>Quantity</Typography>
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
                    onClick={ () => handleCartAddSubtract(cartItem.id, 'ADD') }
                    sx={ { marginRight: 2 } }
                  >
                    <AddIcon />
                  </Fab>
                  <span>{ productCounts[cartItem.id] }</span>
                  <Fab
                    color="primary"
                    size="small"
                    aria-label="Decrement value"
                    onClick={ () => handleCartAddSubtract(cartItem.id, 'SUBTRACT') }
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
          <Box sx={ { display: "flex", justifyContent: "space-between", mt: 5 } }>
            <Button
              variant="contained"
              onClick={ handleCheckout }
              sx={ { borderRadius: 12 } }>Checkout</Button>
            <Button
              variant="contained"
              onClick={ handleClearCart }
              sx={ { borderRadius: 12, bgcolor: "red" } }>Clear Items</Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Cart;
