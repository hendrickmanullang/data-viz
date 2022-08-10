import { render, screen } from '@testing-library/react';
import App from '.'

test('Renders home page by default', () => {
  render(<App />);
  const linkElement = screen.getByText('Look up a company:');
  expect(linkElement).toBeInTheDocument();
});
