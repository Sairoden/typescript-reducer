// LIBRARIES
import { configureStore } from "@reduxjs/toolkit";

// STORE
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: cartSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
