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
      state.value = setActiveComponent(state.value, action.payload);
    },
    onMouseLeave: (state, action) => {
      state.hoveredId = null;
      state.value = setInactiveComponent(state.value);
    },
    changeSelectedComponent: (state, action) => {
      state.selectedId = action.payload;
    },
    changeProperties: (state, action) => {
      state.value = state.value.map((comp, index) => {
        if (comp.id === action.payload.id) {
          state.value[index] = {
            id: action.payload.id,
            ...action,
            properties: {
              ...action.payload.properties,
            },
          };
        }
        return comp;
      });
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
