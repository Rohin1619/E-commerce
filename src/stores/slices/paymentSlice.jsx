import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedCart: [],
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        saveCart: (state, action) => {
            state.savedCart = action.payload;
        },
    },
});

export const { saveCart } = paymentSlice.actions;
export default paymentSlice.reducer;