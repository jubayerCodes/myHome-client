import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featuredPropertiesApi = createApi({
  reducerPath: "featuredPropertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getFeaturedProperties: builder.query({
      query: () => "/featuredProperties",
    }),
  }),
});

export const { useGetFeaturedPropertiesQuery } = featuredPropertiesApi;

export default featuredPropertiesApi;
