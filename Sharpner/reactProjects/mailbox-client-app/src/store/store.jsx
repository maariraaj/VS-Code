import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signup-slice';

const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export default store;