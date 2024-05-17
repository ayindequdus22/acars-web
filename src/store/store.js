import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./likeSlice";
// import cartReducer from "./cartSlice";

 const store = configureStore({
  reducer: {
    // cart: cartReducer,
     likedSlice:likeReducer,
   
  },
});
export default store;

