import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getProperty: builder.query({
      query: (id) => `/properties/${id}`,
    }),
    getProperties: builder.query({
      query: ({ page = 1, limit, type, category, city, sort }) =>
        `/properties?page=${page}&limit=${limit}${
          type !== "" ? `&type=${type}` : ""
        }${category !== "" ? `&category=${category}` : ""}${
          city !== "" ? `&city=${city}` : ""
        }${sort !== "" ? `&sort=${sort}` : ""}`,
    }),
    getSimilarProperties: builder.query({
      query: ({ type, category }) =>
        `/similarProperties?type=${type}&category=${category}`,
    }),
    getTotalPages: builder.query({
      query: ({ limit, type, category, city }) =>
        `/totalPages?limit=${limit}${type !== "" ? `&type=${type}` : ""}${
          category !== "" ? `&category=${category}` : ""
        }${city !== "" ? `&city=${city}` : ""}`,
    }),
    getPropertiesFilterOptions: builder.query({
      query: () => "/propertiesFilterOptions",
    }),
  }),
});

export const {
  useGetPropertyQuery,
  useGetPropertiesQuery,
  useGetTotalPagesQuery,
  useGetPropertiesFilterOptionsQuery,
  useGetSimilarPropertiesQuery,
} = propertiesApi;

export default propertiesApi;
