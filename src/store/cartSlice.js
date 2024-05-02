import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemIndex) {
        itemIndex.cartQuantity += 1;
      }
     
      else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.name} has been added`);
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.name} has been removed`);
    },
    increaseItemQty(state, action) {
      const itemIndex = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemIndex) {
        itemIndex.cartQuantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseItemQty(state, action) {
      const itemIndex = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemIndex.cartQuantity > 1) {
        itemIndex.cartQuantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItems(state, action) {
      state.cartItems = [];
      console.log("helo");
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`Cart Cleared`);
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount.toFixed(2);
      state.cartTotalQuantity = totalQTY;
    },
  },
});
export const {
  addToCart,
  removeItem,
  increaseItemQty,
  upDateItemQty,
  decreaseItemQty,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;

export const cartProducts = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
