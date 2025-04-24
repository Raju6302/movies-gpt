import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: 'gptSearch',
  initialState: {
    gptSearchView: false,
  },
  reducers: {
    gptSearchViewToggle : (state) => {
      state.gptSearchView = !state.gptSearchView
    }
  }
})

export const {gptSearchViewToggle} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;