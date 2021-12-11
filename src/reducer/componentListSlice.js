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
          height: 1080,
          width: 1920,
          stroke: "transparent",
          strokeWidth: 3,
          strokeEnabled: true,
          opacity: 1,
          fill: "#fff",
        },
        child: [],
      },
    ],
    hoveredId: null,
    selectedId: null,
  },
  reducers: {
    addComponent: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    addChild: (state, action) => {},
    onMouseEnter: (state, action) => {
      state.hoveredId = action.payload;
      state.value = state.value.map((comp) => {
        return {
          ...comp,
          properties: {
            ...comp.properties,
            stroke: comp.id === action.payload ? "#33aeff" : undefined,
          },
        };
      });
    },
    onMouseLeave: (state, action) => {
      state.hoveredId = null;
      state.value = state.value.map((comp) => {
        return {
          ...comp,
          properties: {
            ...comp.properties,
            stroke: comp.id === action.payload ? "transparent" : undefined,
          },
        };
      });
    },
    changeSelectedComponent: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

export const {
  addComponent,
  addChild,
  onMouseEnter,
  onMouseLeave,
  changeSelectedComponent,
} = componentListSlice.actions;

export default componentListSlice.reducer;
