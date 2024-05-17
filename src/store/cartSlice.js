import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../utils/axios";
import { UseAddToCartFunction } from "../utils/cartQueries";

// Async thunk to fetch cart items from the backend
export const fetchCartItems = createAsyncThunk("cart/fetchCartItems", async () => {
  const response = await Axios.get("/cart");
  return response.data;
});

// Async thunk to add an item to the cart
export const addItemToCart = createAsyncThunk("cart/addItemToCart",async ({productId,quantity}) => {
  UseAddToCartFunction({productId,quantity})

}
);

// Async thunk to remove an item from the cart
export const removeItemFromCart = createAsyncThunk("cart/removeItemFromCart", async (itemId) => {
  const response = await Axios.delete(`/cart/remove/${itemId}`);
  return { itemId };
});

// Async thunk to update item quantity in the cart
export const updateCartItemQuantity = createAsyncThunk("cart/updateCartItemQuantity", async ({ itemId, quantity }) => {
  const response = await Axios.put(`/cart/update/${itemId}`, { quantity });
  return response.data;
});

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.itemId);
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        const index = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.cartItems[index].quantity = action.payload.quantity;
        }
      });
  }
});

export default CartSlice.reducer;
