import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featuredCitiesApi = createApi({
  reducerPath: "featuredCitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getFeaturedCities: builder.query({
      query: () => "/featuredCities",
    }),
  }),
});

export const { useGetFeaturedCitiesQuery } = featuredCitiesApi;

export default featuredCitiesApi;
