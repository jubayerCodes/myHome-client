import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ role, page, limit }) =>
        `/users?${role && `role=${role}`}
      ${page && `&page=${page}`}
      ${limit && `&limit=${limit}`}`,
    }),
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
    getUser: builder.query({
      query: (email) => `/user?email=${email}`,
    }),
    updateUser: builder.mutation({
      query: ({ email, user }) => ({
        url: `/user?email=${email}`,
        method: "PATCH",
        body: user,
      }),
    }),
    getTotalUsers: builder.query({
      query: (role) => `/totalUsers?role=${role}`,
    }),
  }),
});

export const {
  usePostUserMutation,
  useGetRoleQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useGetUsersQuery,
  useGetTotalUsersQuery,
} = usersApi;

export default usersApi;
