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
import ListItems from '../ListItems';

const getRenderElement = ({ theme, ...props }: any) => render(
    <table><ListItems { ...props }/></table>
);

describe('<ListItems />', () => {
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

                const component = getByTestId('listitems');

                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('listitems');

            expect(component).toBeVisible();
        });
    });

    describe('Basic behaviour', () => {
        it('should route on click in edit', async () => {
            const { queryAllByText } = getRenderElement({});

            const button = queryAllByText('Edit')[0];

            fireEvent.click(button);

            await waitFor(() => expect(mockRouting).toHaveBeenCalledTimes(1));
        });
    });
});
