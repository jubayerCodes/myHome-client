import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice/authSlice";
import modalReducer from "./features/modalSlice/modalSlice";
import { baseApi } from "./features/api/baseApi";
import latestPropertiesApi from "./features/api/latestPropertiesApi";
import propertiesApi from "./features/api/propertiesApi";
import usersApi from "./features/api/usersApi";
import featuredPropertiesApi from "./features/api/featuredPropertiesApi";
import agentsApi from "./features/api/agentsApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [latestPropertiesApi.reducerPath]: latestPropertiesApi.reducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [featuredPropertiesApi.reducerPath]: featuredPropertiesApi.reducer,
    [agentsApi.reducerPath]: agentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(latestPropertiesApi.middleware)
      .concat(propertiesApi.middleware)
      .concat(usersApi.middleware)
      .concat(featuredPropertiesApi.middleware)
      .concat(agentsApi.middleware),
});
