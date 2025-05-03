import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
    fullName: "",
  },
  isLogin: false,
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, { payload }) => {
      return { ...payload };
    },
    logOut: (state, _) => {
      return initialState;
    },
  },
});

export const authAction = {
  ...authSlice.actions,
};

export default authSlice.reducer;
