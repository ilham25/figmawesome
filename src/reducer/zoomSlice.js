import { createSlice } from "@reduxjs/toolkit";

export const zoomSlice = createSlice({
  name: "zoom",
  initialState: {
    value: 1,
  },
  reducers: {
    changeZoom: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, changeZoom } = zoomSlice.actions;

export default zoomSlice.reducer;
