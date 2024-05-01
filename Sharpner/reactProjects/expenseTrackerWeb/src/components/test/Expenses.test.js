import React from 'react';
import { render, screen } from '@testing-library/react';
import Expenses from '../expense/Expenses';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../profile/Profile';


const mockStore = configureStore([]);
const initialState = {};

describe('Expenses Tracker testing', () => {
    test('renders Expense List as text', () => {
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <Expenses />
            </Provider>);

        const expenseListElement = screen.getByText('Daily Expense Form', { exact: false });

        expect(expenseListElement).toBeInTheDocument();
    });
    test('Button component renders', () => {
        const store = mockStore(initialState);
        const { getByRole } = render(
            <Provider store={store}>
                <Expenses />
            </Provider>);
        const buttonElement = getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
});