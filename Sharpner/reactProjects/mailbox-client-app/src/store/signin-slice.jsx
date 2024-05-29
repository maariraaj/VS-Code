import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'AIzaSyCatwThboBu2LgMKmq15aAmAgyFtgh1CAw';

export const signIn = createAsyncThunk('auth/signIn', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      email: credentials.email,
      password: credentials.password,
      returnSecureToken: true,
    });
    console.log(response.data);
    localStorage.setItem('token',response.data.idToken);
    localStorage.setItem('mailId',response.data.email);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const signinSlice = createSlice({
  name: 'signin',
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default signinSlice.reducer;
