import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import likeReducer from "./likeSlice";
import authReducer from "./authSlice";
 const store = configureStore({
  reducer: {
    cart: cartReducer,
    likedSlice:likeReducer,
    auth:authReducer
  },
});
export default store;

