import { render, screen } from '@testing-library/react';
import App from '.';

test('Renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bruh/i);
  expect(linkElement).toBeInTheDocument();
});
