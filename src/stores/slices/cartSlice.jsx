
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    savedCart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter((item) => item.id !== itemIdToRemove);
        },

        clearCart: (state) =>{
            state.items = [];
        },

        saveCart:(state, action) =>{
            state.savedCart = action.payload;
        },

    },
});

export const { addItem, removeItem, clearCart, saveCart } = cartSlice.actions;
export default cartSlice.reducer;
