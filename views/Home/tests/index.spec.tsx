import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import Home from '..';

expect.extend(matchers);

const mockRouting = jest.fn();

// Mock router
jest.mock('next/router', () => ({
  useRouter(): Record<string, any> {
    return {
      pathname: '/edit/$id',
      route: '/edit/$id',
      query: { id: 1 },
      asPath: '/edit/1',
      push: mockRouting,
    };
  },
}));

describe('Home Page', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const { asFragment } = render(<Home />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('should route on click in edit', async () => {
      const { getAllByText } = render(<Home />);

      const button = getAllByText('Edit')[0];

      fireEvent.click(button);

      await waitFor(() => expect(mockRouting).toHaveBeenCalledTimes(1));
    });

    it('should route on click in new', async () => {
      const { getByText } = render(<Home />);

      const button = getByText('Add employee');

      fireEvent.click(button);

      await waitFor(() => expect(mockRouting).toHaveBeenCalledTimes(2));
    });
  });
});
