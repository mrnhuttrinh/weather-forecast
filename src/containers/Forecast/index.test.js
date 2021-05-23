// import { render } from '@testing-library/react';
import Forecast from './index';
import { render } from '../../test-utils';

test('renders Forecast Container', () => {
  const { container } = render(<Forecast />);
  expect(container.querySelector('.forecast-page')).not.toBeNull();
});
