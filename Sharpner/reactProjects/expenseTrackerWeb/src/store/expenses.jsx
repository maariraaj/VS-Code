import { createSlice } from "@reduxjs/toolkit";

const initialExpensesState = {
    expenses: []
};

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: initialExpensesState,
    reducers: {
        setExpenses(state, action) {
            state.expenses=action.payload;
        }
    }
});

export const expensesActions = expensesSlice.actions;

export default expensesSlice.reducer;