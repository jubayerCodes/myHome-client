import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import app from "../../../firebase/firebase.config";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { closeModal } from "../modalSlice/modalSlice";
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

// Google signIn
export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (args, { rejectWithValue, dispatch }) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = { ...result?.user };

      dispatch(closeModal());
      return {
        uid: user?.uid,
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        role: "user",
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// LogOut

export const logOut = createAsyncThunk(
  "auth/logOutStatus",
  async (args, { rejectWithValue }) => {
    try {
      const result = await signOut(auth);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = "authenticated";
    },
    clearUser: (state, action) => {
      state.user = null;
      state.status = "unAuthenticated";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.status = "idle";
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.status = "pending";
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setUser, clearUser, setError } = authSlice.actions;

export default authSlice.reducer;
