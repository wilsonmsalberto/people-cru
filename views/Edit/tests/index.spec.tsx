import { render, themesList } from 'utils/tests';

// Components
import Edit from '../';

const getRenderElement = ({ theme, ...props }: any) => render(
    <Edit { ...props }>Dummy Edit</Edit>
);

describe('<Edit />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('edit');

                expect(component).toBeVisible();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('edit');

            expect(component).toBeVisible();
        });
    });
});
