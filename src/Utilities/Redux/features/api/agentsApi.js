import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const agentsApi = createApi({
  reducerPath: "agentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getAgent: builder.query({
      query: (email) => `/agent?email=${email}`,
    }),
    updateAgent: builder.mutation({
      query: ({ email, agent }) => ({
        url: `/agent?email=${email}`,
        method: "PATCH",
        body: agent,
      }),
    }),
  }),
});

export const { useGetAgentQuery, useUpdateAgentMutation } = agentsApi;

export default agentsApi;
