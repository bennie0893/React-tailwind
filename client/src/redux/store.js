import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the reducer from userSlice

export const store = configureStore({
  reducer: { user: userReducer }, // Use userReducer instead of useReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
