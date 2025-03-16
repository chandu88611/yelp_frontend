import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/userService";
import { businessApi } from "./services/businessApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer, // Add RTK Query reducer
    [businessApi.reducerPath]: businessApi.reducer, // Add RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      businessApi.middleware
      ), // Add RTK Query middleware
});

export default store;
