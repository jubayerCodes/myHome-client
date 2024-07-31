import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice/authSlice";
import modalReducer from "./features/modalSlice/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
});
