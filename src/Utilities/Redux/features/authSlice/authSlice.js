import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import app from "../../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import usersApi from "../api/usersApi";
import Swal from "sweetalert2";
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

// Google signIn
export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (args, { rejectWithValue, dispatch }) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = { ...result?.user };

      const payload = {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        role: "user",
      };

      const { data } = await dispatch(
        usersApi.endpoints.postUser.initiate(payload)
      );

      if (data) {
        return { ...payload };
      } else {
        signOut(auth);

        throw new Error("database error");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Email password Register

export const registerWithEmailAndPassword = createAsyncThunk(
  "auth/registerWithEmailAndPassword",
  async (
    { firstName, lastName, email, password, role },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = result.user;

      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      const payload = {
        uid: user?.uid,
        firstName: firstName,
        lastName: lastName,
        displayName: `${firstName} ${lastName}`,
        email: user?.email,
        role: role,
      };

      const { data } = await dispatch(
        usersApi.endpoints.postUser.initiate(payload)
      );

      if (data) {

        return payload;
      } else {
        throw new Error("database error");
      }
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

// Email and password login

export const loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = result?.user;

      const {
        data: { role },
      } = await dispatch(
        usersApi.endpoints.getRole.initiate(firebaseUser?.email)
      );

      const { data: user } = await dispatch(
        usersApi.endpoints.getUser.initiate(firebaseUser?.email)
      );

      return {
        uid: firebaseUser?.uid,
        firstName: user?.firstName,
        lastName: user?.lastName,
        displayName: firebaseUser?.displayName,
        email: firebaseUser?.email,
        photoURL: firebaseUser?.photoURL,
        role: role,
      };
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        return Swal.fire({
          icon: "error",
          title: "Oops!! Wrong Password!",
        }).then(() => {
          return rejectWithValue(error);
        });
      }
    }
  }
);

// LogOut

export const logOut = createAsyncThunk(
  "auth/logOutStatus",
  async (args, { rejectWithValue }) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sign Out!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await signOut(auth);
          return result;
        }
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setRole = createAsyncThunk(
  "auth/setRole",
  async (email, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await dispatch(
        usersApi.endpoints.getRole.initiate(email)
      );

      return data?.role;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  user: null,
  status: "idle",
  error: null,
  role: null,
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
      state.role = null;
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
        state.status = "authenticated";
        state.role = action.payload.role;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.status = "pending";
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

        if (action.payload === "database error") {
          Swal.fire({
            title: "Ops!",
            text: "Database error. Try again later!",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      })
      .addCase(registerWithEmailAndPassword.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.status = "authenticated";
        state.role = action?.payload?.role;
      })
      .addCase(registerWithEmailAndPassword.pending, (state) => {
        state.status = "pending";
      })
      .addCase(registerWithEmailAndPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

        if (action.payload === "Firebase: Error (auth/email-already-in-use).") {
          Swal.fire({
            title: "Ops!",
            text: "Email already exist!",
            icon: "error",
            confirmButtonText: "Okay",
          });
        } else if (action.payload === "database error") {
          Swal.fire({
            title: "Ops!",
            text: "Database error. Try again later!",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.status = "authenticated";
        state.role = action?.payload?.role;
      })
      .addCase(loginWithEmailAndPassword.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(setRole.fulfilled, (state, action) => {
        state.role = action.payload;
        state.status = "authenticated";
      })
      .addCase(setRole.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(setRole.rejected, (state, action) => {
        state.user = null;
        state.status = "failed";
        state.role = null;
      });
  },
});

export const { setUser, clearUser, setError } = authSlice.actions;

export default authSlice.reducer;
