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
      // if (itemIndex >= 0) {
      //   state.cartItems[itemIndex].cartQuantity += 1;
      // }
      else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.name} has been added`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: 'bounce',
        });
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
      // toast.error(`Cart has been successfully added`);
    },
    // upDateItemQty: (state, action) => {
    //   const { product, quantity } = action.payload;
    //   const itemIndex = state.cartItems.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemIndex) {
    //     itemIndex.cartQuantity = quantity;
    //   }
    // },
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

// import { createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

// const initialState = {
//   cartItems: JSON.parse(localStorage.getItem("cart")) || [],
//   cartTotalAmount: 0,
//   cartTotalQuantity: 0,
// };

// const CartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const { id, name, price } = action.payload;
//       const existingItem = state.cartItems.find(item => item.id === id);
//       if (existingItem) {
//         existingItem.cartQuantity += 1;
//       } else {
//         state.cartItems.push({ id, name, price, cartQuantity: 1 });
//       }
//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//       toast.success(`${name} has been added`);
//     },
//     removeItem(state, action) {
//       const { id, name } = action.payload;
//       state.cartItems = state.cartItems.filter(item => item.id !== id);
//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//       toast.success(`${name} has been removed`);
//     },
//     updateItemQuantity(state, action) {
//       const { id, increment } = action.payload;
//       const itemToUpdate = state.cartItems.find(item => item.id === id);
//       if (itemToUpdate) {
//         itemToUpdate.cartQuantity += increment ? 1 : -1;
//         if (itemToUpdate.cartQuantity <= 0) {
//           state.cartItems = state.cartItems.filter(item => item.id !== id);
//         }
//       }
//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     },
//     clearCart(state) {
//       state.cartItems = [];
//       localStorage.removeItem("cart");
//       toast.error(`Cart has been cleared`);
//     },
//     recalculateTotals(state) {
//       const { totalAmount, totalQTY } = state.cartItems.reduce(
//         (totals, item) => {
//           totals.totalAmount += item.price * item.cartQuantity;
//           totals.totalQTY += item.cartQuantity;
//           return totals;
//         },
//         { totalAmount: 0, totalQTY: 0 }
//       );
//       state.cartTotalAmount = totalAmount.toFixed(2);
//       state.cartTotalQuantity = totalQTY;
//     },
//   },
// });

// export const {
//   addToCart,
//   removeItem,
//   updateItemQuantity,
//   clearCart,
//   recalculateTotals,
// } = CartSlice.actions;

// export const selectCartItems = state => state.cart.cartItems;
// export const selectTotalAmount = state => state.cart.cartTotalAmount;
// export const selectTotalQuantity = state => state.cart.cartTotalQuantity;

// export default CartSlice.reducer;
