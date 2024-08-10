import { render, screen, fireEvent } from '@testing-library/react';
import ParentComp from '../components/ParentComp';
import { expect } from 'vitest';

describe('<ParentComp /> component', () => {
  it('updates the parent component text when the child component button is clicked', () => {
    render(<ParentComp />);

    const inputElem = screen.getByRole('textbox');
    const buttonElem = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(inputElem, { target: { value: "Hello world "} });
    fireEvent.click(buttonElem);
    
    const updatedText = screen.getByText(/Text: Hello world/i);
    expect(updatedText).toBeInTheDocument();
  })
})