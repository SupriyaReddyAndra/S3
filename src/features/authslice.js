import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axiosInstance";

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

// Register thunk (multipart/form-data)
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ fullName, email, phone, password, photoBlob }, { rejectWithValue }) => {
    try {
      const fd = new FormData();
      fd.append("fullName", fullName);
      fd.append("email", email);
      fd.append("phone", phone || "");
      fd.append("password", password);
      if (photoBlob) fd.append("profilePhoto", photoBlob);

      const res = await axios.post("/users/register", fd, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message || "Registration failed");
    }
  }
);

// Login thunk (JSON)
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/users/login", { email, password });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (s) => { s.isLoading = true; s.error = null; })
      .addCase(registerUser.fulfilled, (s) => { s.isLoading = false; })
      .addCase(registerUser.rejected, (s, a) => { s.isLoading = false; s.error = a.payload || a.error?.message; })

      .addCase(loginUser.pending, (s) => { s.isLoading = true; s.error = null; })
      .addCase(loginUser.fulfilled, (s, a) => {
        s.isLoading = false;
        s.user = a.payload;
        s.isAuthenticated = true;
        s.error = null;
      })
      .addCase(loginUser.rejected, (s, a) => { s.isLoading = false; s.error = a.payload || a.error?.message; });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
