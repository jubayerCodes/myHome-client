import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice/authSlice";
import { baseApi } from "./features/api/baseApi";
import latestPropertiesApi from "./features/api/latestPropertiesApi";
import propertiesApi from "./features/api/propertiesApi";
import usersApi from "./features/api/usersApi";
import featuredPropertiesApi from "./features/api/featuredPropertiesApi";
import featuredCitiesApi from "./features/api/featuredCitiesApi";
import imageApi from "./features/api/imageApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [latestPropertiesApi.reducerPath]: latestPropertiesApi.reducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [featuredPropertiesApi.reducerPath]: featuredPropertiesApi.reducer,
    [featuredCitiesApi.reducerPath]: featuredCitiesApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(latestPropertiesApi.middleware)
      .concat(propertiesApi.middleware)
      .concat(usersApi.middleware)
      .concat(featuredPropertiesApi.middleware)
      .concat(imageApi.middleware)
      .concat(featuredCitiesApi.middleware)
});
