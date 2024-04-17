// LIBRARIES
import { configureStore } from "@reduxjs/toolkit";

// STORE
import { cartSlice } from "./cartSlice";

const store = configureStore({
  reducer: cartSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}