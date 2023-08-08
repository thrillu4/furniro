import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Product} from '../../data/productTypes';

type ProductState = {
    cart: Product[];
    favorite: Product[];
}

const initialState: ProductState = { 
    cart: [],
    favorite: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const newCart = [...state.cart];
      const foundIndex = state.cart.findIndex(({ id }) => id === action.payload.id);

      if (foundIndex !== -1) {
        newCart[foundIndex] = {
          ...newCart[foundIndex],
          quantity: (newCart[foundIndex].quantity || 0) + 1,
        };
      } else {
        newCart.push({ ...action.payload, quantity: 1 });
      }

      state.cart = newCart;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addToFavorite: (state, action: PayloadAction<Product>) => {
      const newFavorite = [...state.favorite];
      const foundIndex = state.favorite.findIndex(({ id }) => id === action.payload.id);

      if (foundIndex !== -1) {
        newFavorite[foundIndex] = {
          ...newFavorite[foundIndex],
          quantity: (newFavorite[foundIndex].quantity || 0) + 1,
        };
      } else {
        newFavorite.push({ ...action.payload, quantity: 1 });
      }

      state.favorite = newFavorite;
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      state.favorite = state.favorite.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart, removeFromFavorite, addToFavorite } = cartSlice.actions;
export default cartSlice.reducer;