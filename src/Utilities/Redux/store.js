import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice/authSlice";
import modalReducer from "./features/modalSlice/modalSlice";
import { baseApi } from "./features/api/baseApi";
import latestPropertiesApi from "./features/api/latestPropertiesApi";
import propertiesApi from "./features/api/propertiesApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [latestPropertiesApi.reducerPath]: latestPropertiesApi.reducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(latestPropertiesApi.middleware)
      .concat(propertiesApi.middleware),
});
