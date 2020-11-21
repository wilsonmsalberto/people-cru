import * as React from 'react';
import { render, themesList } from 'utils/tests';

// Components
import User from '../User';

const getRenderElement = (props: any) => render(
    <User { ...props } />
);

describe('<User />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('user');

                expect(component).toBeVisible();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('user');

            expect(component).toBeVisible();
        });
    });
});
