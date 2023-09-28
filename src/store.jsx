import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './stores/slices/counterSlice'
import productsReducer from './stores/slices/productsSlice';
import cartReducer from './stores/slices/cartSlice';
import paymentReducer from './stores/slices/paymentSlice'
import loginReducer from './stores/slices/loginSlice'
const store = configureStore({
reducer: {
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer,
    payment: paymentReducer,
    login: loginReducer
},
})

export default store;