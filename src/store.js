import { configureStore } from "@reduxjs/toolkit";
import zoomSlice from "reducer/zoomSlice";

export default configureStore({
  reducer: {
    zoom: zoomSlice,
  },
});
