import Greetings from "./Greetings";
import { render, screen } from '@testing-library/react';

describe('Greeting component', () => {
    test('renders Hello world as text', () => {
        render(<Greetings />);

        const helloWorldElement = screen.getByText('Hello World', { exact: false });

        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders paragraph tag', () => {
        render(<Greetings />);

        const pTagElement = screen.getByText('It is good to see you', { exact: false });

        expect(pTagElement).toBeInTheDocument();
    });
});
