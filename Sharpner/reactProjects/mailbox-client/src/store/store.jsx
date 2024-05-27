import { configureStore } from '@reduxjs/toolkit';
import signinReducer from './signin-slice';
import signupReducer from './signup-slice';

const store = configureStore({
  reducer: {
    signin: signinReducer,
    signup: signupReducer,
  },
});

export default store;
