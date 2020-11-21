import { cleanup, mockNextUseRouter, render, themesList } from 'utils/tests';

// Components
import Edit from '..';

const getRenderElement = ({ theme, ...props }: any) => render(
    <Edit { ...props }>Dummy Edit</Edit>
);

describe('<Edit />', () => {
    beforeEach(() => {
        mockNextUseRouter({
            query: { id: 1 },
        });
    });

    afterEach(cleanup);

    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('editpage');

                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('editpage');

            expect(component).toBeVisible();
        });
    });
});
