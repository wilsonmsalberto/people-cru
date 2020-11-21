import { render, themesList } from 'utils/tests';

// Components
import ListHeader from '../ListHeader';

const getRenderElement = (props: any) => render(
    <ListHeader { ...props } />
);

describe('<ListHeader />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('listheader');

                expect(component).toBeVisible();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('listheader');

            expect(component).toBeVisible();
        });
    });
});
