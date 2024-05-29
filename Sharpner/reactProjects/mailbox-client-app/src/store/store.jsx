import { configureStore } from '@reduxjs/toolkit';
import signinReducer from './signin-slice';
import signupReducer from './signup-slice';
import composeReducer from './compose-slice';

const store = configureStore({
  reducer: {
    signin: signinReducer,
    signup: signupReducer,
    compose: composeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['compose.editorState'],
        ignoredActions: ['compose/setEditorState'],
        ignoredActionPaths: ['meta.arg.editorState', 'payload.editorState'],
      },
    }),
});

export default store;