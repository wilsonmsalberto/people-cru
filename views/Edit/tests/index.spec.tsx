import React from 'react';
import { render } from '@testing-library/react';

import Edit from '..';

describe('Edit Page', () => {
    describe('Rendering', () => {
        it('should render properly', () => {
            const { asFragment } = render(<Edit />);

            expect(asFragment()).toMatchSnapshot();
        });
    });
});
