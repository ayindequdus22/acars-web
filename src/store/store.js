import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import likeReducer from "./likeSlice";
 const store = configureStore({
  reducer: {
    cart: cartReducer,
    likedSlice:likeReducer,
  },
});
export default store;

