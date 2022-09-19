import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

// Redux store for slices in features dir
export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});