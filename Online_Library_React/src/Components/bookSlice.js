import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    setBooks(state, action) {
      return action.payload;
    },
    addBook(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
