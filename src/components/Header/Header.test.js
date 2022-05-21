import { render, screen } from '@testing-library/react';
import Header from '.';

test('Aenders Header', () => {
  render(<Header />);
  const headerText = screen.getByText(/Header/i);
  expect(headerText).toBeInTheDocument();
});

describe('Search Input', () => {
  test('Render input element', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });
  test('Check search input default focus state', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).not.toHaveFocus();
  });
})
