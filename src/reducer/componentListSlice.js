import { createSlice } from "@reduxjs/toolkit";

export const componentListSlice = createSlice({
  name: "componentList",
  initialState: {
    value: [
      {
        id: "awek",
        title: "vl",
        properties: {
          x: 50,
          y: 50,
          height: 1920,
          width: 1080,
          stroke: "transparent",
          strokeWidth: 3,
          strokeEnabled: true,
          opacity: 1,
          fill: "#fff",
        },
        child: [],
      },
    ],
  },
  reducers: {
    addComponent: (state, action) => {
      state.value = [
        ...state.value,
        {
          ...action.payload,
          child: [],
        },
      ];
    },
    addChild: (state, action) => {},
  },
});

export const { addComponent, addChild } = componentListSlice.actions;

export default componentListSlice.reducer;
