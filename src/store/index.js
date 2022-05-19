import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import roomReducer from "./room";

const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
