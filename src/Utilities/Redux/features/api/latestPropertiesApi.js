import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const latestPropertiesApi = createApi({
  reducerPath: "latestPropertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getLatestProperties: builder.query({
      query: () => "/latestProperties",
    }),
  }),
});

export const { useGetLatestPropertiesQuery } = latestPropertiesApi;

export default latestPropertiesApi;
