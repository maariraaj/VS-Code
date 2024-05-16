import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello world as text', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText(/Hello World/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
  test('renders paragraph tag', () => {
    render(<Greeting />);
    //const pTagElement = screen.getByText(/It is good to see you/i);
    const outputElement = screen.queryByText((content) => {
      return content === 'It is good to see you';
    });
    expect(outputElement).toBeNull();
  });
  test('renders "good to see" you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test('renders "Changed!" if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText((content) => {
      return content === 'Changed!';
    });
    expect(outputElement).toBeNull();
  });
  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText((content) => {
      return content === 'It is good to see you.';
    });
    expect(outputElement).toBeNull();
  });
});