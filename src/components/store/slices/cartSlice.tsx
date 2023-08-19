import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../data/productTypes";

type ProductState = {
  cart: Product[];
  favorite: Product[];
  compare: Product[];
};

const initialState: ProductState = {
  cart: [],
  favorite: [],
  compare: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === action.payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: action.payload.quantity || item.quantity + 1,
              }
            : item;
        });
      } else {
        newCart.push({ ...action.payload });
      }
      state.cart = newCart;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addToFavorite: (state, action: PayloadAction<Product>) => {
      const newFavorite = [...state.favorite];
      const foundIndex = state.favorite.findIndex(
        ({ id }) => id === action.payload.id,
      );

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
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload,
      );
    },
    addToComparison: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.compare.findIndex(
        ({ id }) => id === action.payload.id,
      );
      if (existingIndex !== -1) {
        state.compare[existingIndex] = {
          ...state.compare[existingIndex],
          quantity:
            action.payload.quantity ||
            state.compare[existingIndex].quantity + 1,
        };
      } else {
        if (state.compare.length >= 2) {
          state.compare.shift();
        }
        state.compare.push({ ...action.payload });
      }
    },
    removeFromComparison: (state, action: PayloadAction<string>) => {
      state.compare = state.compare.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeFromFavorite,
  addToFavorite,
  addToComparison,
  removeFromComparison,
} = cartSlice.actions;
export default cartSlice.reducer;
