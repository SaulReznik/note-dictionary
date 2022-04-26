import { render, screen } from '@testing-library/react';
import App from './styles';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bruh/i);
  expect(linkElement).toBeInTheDocument();
});
