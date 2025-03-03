import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
    }),
    listUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserProfileQuery,
  useListUsersQuery,
  useLogoutUserMutation,
} = userApi;
