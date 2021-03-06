import {
    cleanup,
    fireEvent,
    mockNextUseRouter,
    render,
    themesList,
    waitFor,
} from 'utils/tests';

// Mocks
const mockRouting = jest.fn();

// Components
import Home from '../Home';

const getRenderElement = ({ theme, ...props }: any) => render(
    <Home { ...props }/>
);

describe('<Home />', () => {
    beforeEach(() => {
        mockNextUseRouter({
            push: mockRouting,
        });
    });

    afterEach(cleanup);

    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('homepage');

                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('homepage');

            expect(component).toBeVisible();
        });
    });

    describe('Basic behaviour', () => {
        it('should route on click in new', async () => {
            const { getByText } = getRenderElement({});

            const button = getByText('Add employee');

            fireEvent.click(button);

            await waitFor(() => expect(mockRouting).toHaveBeenCalledTimes(1));
        });
    });
});
