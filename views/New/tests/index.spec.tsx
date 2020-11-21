import { render } from '@testing-library/react';

import New from '..';

describe('New Page', () => {
    describe('Rendering', () => {
        it('should render properly', () => {
            const { asFragment } = render(<New />);

            expect(asFragment()).toMatchSnapshot();
        });
    });
});
