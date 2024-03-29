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
    },
    changeNavTool: (state, action) => {
      state.navTool = action.payload;
    },
    resetTool: (state) => {
      state.value = null;
      state.navTool = null;
    },
  },
});

export const { changeSelectedTool, changeNavTool, resetTool } =
  selectedToolSlice.actions;

export default selectedToolSlice.reducer;
