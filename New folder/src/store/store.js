import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./likeSlice";
const store = configureStore({
  reducer: {
    likedSlice: likeReducer,

  },
});
export default store;

