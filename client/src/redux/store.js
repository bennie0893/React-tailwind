import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the reducer from userSlice
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userReducer });
const persistConfig = { key: "root", version: 1, storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer, // Use userReducer instead of useReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
