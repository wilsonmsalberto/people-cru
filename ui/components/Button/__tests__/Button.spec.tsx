import * as React from 'react';
import { render, themesList } from 'utils/tests';

// Components
import Button from '../Button';

const getRenderElement = ({ theme, ...props }: any) => render(
    <Button { ...props }>Dummy Button</Button>
);

describe('<Button />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('button');

                expect(component).toBeVisible();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('button');

            expect(component).toBeVisible();
        });
    });
});
