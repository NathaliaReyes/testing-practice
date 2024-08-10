import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
import { expect } from 'vitest';

// these are 2 tests: the first one checks if the Counter component renders correctly,
// the second one checks if the Counter component increments the count when the button is clicked

describe('<Counter /> component', () => {
  it('renders the Counter component', () => {
    render(<Counter />);
    const countElem = screen.getByText(/Counter:/i);
    const incremElem = screen.getByText(/Increment:/i);

    expect(countElem).toBeInTheDocument();
    expect(incremElem).toBeInTheDocument();
  })

  it('increments the value of count when the user clicked', () => {
    render(<Counter />);
    const buttonElem = screen.getByText(/Increment:/i);

    fireEvent.click(buttonElem);
    const countElem = screen.getByText(/Counter: 1/i);
    expect(countElem).toBeInTheDocument();
  })
});