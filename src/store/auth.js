import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false, email: "", password: "" };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      console.log(actions, "actions log from store slice");
      state.isAuthenticated = true;
      state.email = actions.payload.email;
      state.password = actions.payload.password;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
