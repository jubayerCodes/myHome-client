import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.imgbb.com/1/upload`,
  }),
  endpoints: (builder) => ({
    postImage: builder.mutation({
      query: (photoData) => ({
        url: `${import.meta.env.VITE_IMAGE_UPLOAD_API_KEY}`,
        method: "POST",
        body: photoData,
      }),
    }),
  }),
});

export const { usePostImageMutation } = imageApi;
export default imageApi;
