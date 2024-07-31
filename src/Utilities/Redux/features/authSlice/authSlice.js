import { createSlice } from "@reduxjs/toolkit";
import app from "../../../firebase/firebase.config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const initialState = {
  user: {},
};

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state) => {},
    signInWithGoogle: (state) => {
      signInWithPopup(auth, googleProvider)
        .then((res) => {
          const user = res.user;
          console.log(user);
        })
        .catch((error) => console.log(error));
    },
  },
});

export const { signUp, signInWithGoogle } = authSlice.actions;

export default authSlice.reducer;
