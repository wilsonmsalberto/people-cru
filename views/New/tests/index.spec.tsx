import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import New from '..';

expect.extend(matchers);

describe('New Page', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const { asFragment } = render(<New />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
