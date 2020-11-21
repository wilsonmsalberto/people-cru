import * as React from 'react';
import { render, themesList } from 'utils/tests';

// Components
import ThemeWrapper from '../ThemeWrapper';

const getRenderElement = ({ theme, ...props }: any) => render(
    <ThemeWrapper { ...props } />
);

describe('<ThemeWrapper />', () => {
    describe('Basic rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('themewrapper');

                expect(component).toBeVisible();
            }
        );
    });
});
