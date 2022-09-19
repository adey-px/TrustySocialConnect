import { createSlice } from '@reduxjs/toolkit';

// User slice for redux store
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
 
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    }
  },
});

//
export const { login, logout } = userSlice.actions;

// For use in App to create user instance
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;