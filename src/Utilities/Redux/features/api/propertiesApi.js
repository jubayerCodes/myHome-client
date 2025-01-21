import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getProperty: builder.query({
      query: (id) => `/properties/${id}`,
    }),
    getProperties: builder.query({
      query: ({ page = 1, limit, category, city, sort, active }) =>
        `/properties?page=${page}&limit=${limit}${
          category !== "" ? `&category=${category}` : ""
        }${city !== "" ? `&city=${city}` : ""}${
          sort !== "" ? `&sort=${sort}` : ""
        }${active ? `$active=${active}` : ""}`,
    }),
    getSimilarProperties: builder.query({
      query: ({ type, category, _id }) =>
        `/similarProperties?type=${type}&category=${category}&_id=${_id}`,
    }),
    getTotalPages: builder.query({
      query: ({ limit, category, city }) =>
        `/totalPages?limit=${limit}${
          category !== "" ? `&category=${category}` : ""
        }${city !== "" ? `&city=${city}` : ""}`,
    }),
    getPropertiesFilterOptions: builder.query({
      query: () => "/propertiesFilterOptions",
    }),
    postProperty: builder.mutation({
      query: (property) => ({
        url: "/property",
        method: "POST",
        body: property,
      }),
    }),
  }),
});

export const {
  useGetPropertyQuery,
  useGetPropertiesQuery,
  useGetTotalPagesQuery,
  useGetPropertiesFilterOptionsQuery,
  useGetSimilarPropertiesQuery,
  usePostPropertyMutation,
} = propertiesApi;

export default propertiesApi;
