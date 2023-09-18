import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './stores/slices/counterSlice'
import productsReducer from './stores/slices/productsSlice';
import cartReducer from './stores/slices/cartSlice'

const store = configureStore({
reducer: {
    counter: counterReducer,
    products: productsReducer,
        cart: cartReducer,
},
})

export default store;