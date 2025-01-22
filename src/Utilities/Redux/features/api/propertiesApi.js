import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getProperty: builder.query({
      query: (id) => `/properties/${id}`,
    }),
    getProperties: builder.query({
      query: ({ page = 1, limit, category, city, sort, status }) =>
        `/properties?page=${page}&limit=${limit}${
          category ? `&category=${category}` : ""
        }${city ? `&city=${city}` : ""}${
          sort ? `&sort=${sort}` : "&sort=newest_first"
        }${status ? `&status=${status}` : ""}`,
    }),
    getSimilarProperties: builder.query({
      query: ({ type, category, _id }) =>
        `/similarProperties?type=${type}&category=${category}&_id=${_id}`,
    }),
    getTotalPages: builder.query({
      query: ({ limit, category, city, status }) =>
        `/totalPages?limit=${limit}${category ? `&category=${category}` : ""}${
          city ? `&city=${city}` : ""
        }${status ? `&status=${status}` : ""}`,
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
    updatedStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/property/${id}`,
        method: "PATCH",
        body: { status },
      }),
    }),
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `/property/${id}`,
        method: "DELETE",
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
  useUpdatedStatusMutation,
  useDeletePropertyMutation,
} = propertiesApi;

export default propertiesApi;
