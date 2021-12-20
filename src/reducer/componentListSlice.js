import { createSlice } from "@reduxjs/toolkit";

const setActiveComponent = (value, id) => {
  return value.map((comp) => {
    return {
      ...comp,
      properties: {
        ...comp.properties,
        stroke: comp.id === id ? "#33aeff" : "transparent",
      },
    };
  });
};
const setInactiveComponent = (value) => {
  return value.map((comp) => {
    return {
      ...comp,
      properties: {
        ...comp.properties,
        stroke: "transparent",
      },
    };
  });
};

export const componentListSlice = createSlice({
  name: "componentList",
  initialState: {
    value: [
      {
        id: "screen1",
        title: "Screen",
        key: "screen",
        group: "frames",
        properties: {
          x: 0,
          y: 0,
          width: 1366,
          height: 768,
          fill: "#C4C4C4",
        },
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
    setHovered: (state, action) => {
      state.hoveredId = action.payload;
    },
    removeHovered: (state, action) => {
      state.hoveredId = null;
    },
    changeSelectedComponent: (state, action) => {
      state.selectedId = action.payload;
    },
    changeProperties: (state, action) => {
      state.value = state.value.map((comp) => {
        return comp.id === action.payload.id
          ? {
              ...action.payload,
            }
          : comp;
      });
    },
  },
});

export const {
  addComponent,
  addChild,
  setHovered,
  removeHovered,
  changeSelectedComponent,
  changeProperties,
} = componentListSlice.actions;

export default componentListSlice.reducer;
