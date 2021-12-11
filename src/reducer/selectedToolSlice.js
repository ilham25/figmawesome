import { createSlice } from "@reduxjs/toolkit";

export const selectedToolSlice = createSlice({
  name: "selectedTool",
  initialState: {
    value: null,
    navTool: null,
  },
  reducers: {
    // changeSelectedTool: (state, action) => {
    //   state.value = action.payload;
    // },
    changeSelectedTool: (state, action) => {
      state.value = action.payload;
      state.navTool = null;
    },
    changeNavTool: (state, action) => {
      state.navTool = action.payload;
    },
  },
});

export const { changeSelectedTool, changeNavTool } = selectedToolSlice.actions;

export default selectedToolSlice.reducer;
