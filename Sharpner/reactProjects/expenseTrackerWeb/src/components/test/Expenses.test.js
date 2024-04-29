import { render, screen } from '@testing-library/react';
import Expenses from '../expense/Expenses';

describe('Expenses Tracker testing', () => {
    test('renders Expense List as text', () => {
        render(<Expenses />);

        const expenseListElement = screen.getByText('Expense List', { exact: false });

        expect(expenseListElement).toBeInTheDocument();
    });
    test('Button component renders', () => {
        const { getByRole } = render(<Expenses />);
        const buttonElement = getByRole('button');
        expect(buttonElement).toBeInTheDocument();
      });
});