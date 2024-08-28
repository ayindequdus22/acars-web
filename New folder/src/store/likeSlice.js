import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedItems: localStorage.getItem('likedItems') ? JSON.parse(localStorage.getItem('likedItems')) : []
}
const likeSlice = createSlice({
  initialState,
  name: 'likedSlice',
  reducers: {
    addToLiked(state, action) {
      const item = state.likedItems.find((item) => item._id === action.payload._id)
      if (item) {
        state.likedItems = state.likedItems.filter(item => item._id !== action.payload._id);
      }
      else {
        state.likedItems.push(action.payload);
      }
      localStorage.setItem('likedItems', JSON.stringify(state.likedItems))
    },
    removeFromLiked(state, action) {
      state.likedItems = state.likedItems.filter(item => item._id !== action.payload._id);
      localStorage.setItem('likedItems', JSON.stringify(state.likedItems));
    }
  }
});

export const { addToLiked, removeFromLiked } = likeSlice.actions;
export default likeSlice.reducer;
