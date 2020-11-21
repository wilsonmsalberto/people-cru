import { render, themesList } from 'utils/tests';

// Components
import PeopleList from '../PeopleList';

const getRenderElement = (props: any) => render(
    <PeopleList { ...props } />
);

describe('<PeopleList />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('peoplelist');

                expect(component).toBeVisible();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('peoplelist');

            expect(component).toBeVisible();
        });
    });
});
