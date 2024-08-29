import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
    getRole: builder.query({
      query: (email) => `/role?email=${email}`,
    }),
  }),
});

export const { usePostUserMutation, useGetRoleQuery } = usersApi;

export default usersApi;