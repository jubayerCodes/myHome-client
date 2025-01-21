import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getAdmin: builder.query({
      query: (email) => `/admin?email=${email}`,
    }),
    updateAdmin: builder.mutation({
      query: ({ email, admin }) => ({
        url: `/admin?email=${email}`,
        method: "PATCH",
        body: admin,
      }),
    }),
  }),
});

export const { useGetAdminQuery, useUpdateAdminMutation } = adminApi;

export default adminApi;
