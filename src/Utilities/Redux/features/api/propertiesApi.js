import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getProperty: builder.query({
      query: (id) => `/properties/${id}`,
    }),
    getProperties: builder.query({
      query: ({ page = 1, limit = 6 }) =>
        `/properties?page=${page}&limit=${limit}`,
    }),
    getTotalPages: builder.query({
      query: (limit = 6) => `/totalPages?limit=${limit}`,
    }),
  }),
});

export const {
  useGetPropertyQuery,
  useGetPropertiesQuery,
  useGetTotalPagesQuery,
} = propertiesApi;

export default propertiesApi;
