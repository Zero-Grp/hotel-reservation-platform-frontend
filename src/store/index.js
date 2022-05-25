import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import roomReducer from "./room";
import reservationReducer from "./reservation";

const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
    reservation: reservationReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
