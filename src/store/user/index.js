import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userRequest from "../../api/user/user.request";

const token = localStorage.getItem("token");

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await userRequest.login(username, password);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  userRequest.logout();
});

const initialState = token
  ? { isLoggedIn: true, token, error: null }
  : { isLoggedIn: false, token: null, error: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.error = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = action.payload;
    },
    // eslint-disable-next-line
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
