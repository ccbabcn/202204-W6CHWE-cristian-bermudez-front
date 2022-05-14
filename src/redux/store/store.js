import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../features/robotsSlice";

const store = configureStore({
  reducer: { robos: robotsReducer },
});

export default store;
