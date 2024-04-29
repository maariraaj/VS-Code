import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
    theme: true
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        }
    }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;