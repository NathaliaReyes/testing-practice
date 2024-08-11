import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import { expect } from 'vitest';

//This test validates a Login:
//1. The Login component renders correctly
//2. The Login component changes the state when the user types in the input field
describe('<Login /> component', () => {
  it('renders the Login component', () => {
    render(<Login />);
    const emailElem = screen.getByLabelText(/Email:/i);
    const passwordElem = screen.getByLabelText(/Password:/i);
    const buttonElem = screen.getByRole('button', { name: /Login/i });

    expect(emailElem).toBeInTheDocument();
    expect(passwordElem).toBeInTheDocument();
    expect(buttonElem).toBeInTheDocument();
  })

  it('updates the state when the user types in the input field', () => {
    render(<Login />);
    const emailElem = screen.getByLabelText(/Email:/i);
    const passwordElem = screen.getByLabelText(/Password:/i);

    fireEvent.change(emailElem, { target: { value: 'user@email.com' } });
    fireEvent.change(passwordElem, { target: { value: 'password' } });

    expect(emailElem).toHaveValue('user@email.com');

    expect(passwordElem).toHaveValue('password');
    })

});