import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../features/robotsSlice/robotsSlice";
import userReducer from "../features/userSlice/userSlice";

const store = configureStore({
  reducer: { robots: robotsReducer, user: userReducer },
});

export default store;
