import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Product} from '../../data/productTypes';

type ProductState = {
    list: Product[];
}

const initialState: ProductState = {
    list: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.list.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;