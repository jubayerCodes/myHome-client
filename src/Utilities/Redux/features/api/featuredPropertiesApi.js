import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featuredPropertiesApi = createApi({
  reducerPath: "featuredPropertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getFeaturedProperties: builder.query({
      query: () => "/featuredProperties",
    }),
    getFeaturedCategories: builder.query({
      query: () => "/featuredCategories",
    }),
  }),
});

export const { useGetFeaturedPropertiesQuery, useGetFeaturedCategoriesQuery } = featuredPropertiesApi;

export default featuredPropertiesApi;
