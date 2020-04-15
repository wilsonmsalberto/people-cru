import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import Home from '..';

expect.extend(matchers);

describe('Home Page', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const { asFragment } = render(<Home />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
