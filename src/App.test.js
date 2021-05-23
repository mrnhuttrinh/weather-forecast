// import { render } from '@testing-library/react';
import App from './App';
import { render } from './test-utils';

test('renders App with layout', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.layout')).not.toBeNull();
});
