import { configureStore } from "@reduxjs/toolkit";

import componentListSlice from "reducer/componentListSlice";
import selectedToolSlice from "reducer/selectedToolSlice";
import zoomSlice from "reducer/zoomSlice";

export default configureStore({
  reducer: {
    zoom: zoomSlice,
    componentList: componentListSlice,
    selectedTool: selectedToolSlice,
  },
});
