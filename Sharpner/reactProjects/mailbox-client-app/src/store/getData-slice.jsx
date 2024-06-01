import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async (_, { rejectWithValue }) => {

    try {
        const mailId = localStorage.getItem('mailId').split(/[.@]/).join("");
        const response = await axios.get(`https://mail-box-client-7-default-rtdb.firebaseio.com/${mailId}.json`);
        if (!response.data || Object.keys(response.data).length === 0) {
            return rejectWithValue('No data found');
        }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const getDataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default getDataSlice.reducer;
