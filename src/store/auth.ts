import { createSlice } from "@reduxjs/toolkit";

const initialState: { token: string | null } = {
    token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }: { payload: string }) => {
      state.token = payload;
      return state;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { setAuth } = authSlice.actions;
