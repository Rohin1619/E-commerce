import React from "react";
import { Box, CssBaseline, Container, FormControl, InputLabel, Input, TextField } from '@mui/material';
const Cart = () => {
  return (
    <>
      <Box className ="container">
        <Box className = "quantity">
            
            <a className = "quantity_minus" title="DECREMENT"><spam> - </spam></a>
            <input name="quantity" type="text" className="quantity_input" value="0"></input>
            <a className="quantity_plus" title="INCREMENT"><spam> + </spam></a>
        </Box>
      </Box>
    </>
  )
}

export default Cart
