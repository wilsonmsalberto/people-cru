import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import Edit from '..';

expect.extend(matchers);

// Mock router
jest.mock('next/router', () => ({
  useRouter(): Record<string, any> {
    return {
      pathname: '/edit/$id',
      route: '/edit/$id',
      query: { id: 1 },
      asPath: '/edit/1',
    };
  },
}));

describe('Edit Page', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const { asFragment } = render(<Edit />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
