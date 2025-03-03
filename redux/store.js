import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/userService";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer, // Add RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), // Add RTK Query middleware
});

export default store;
