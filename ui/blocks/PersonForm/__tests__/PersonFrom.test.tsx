import {
    cleanup,
    fireEvent,
    mockNextUseRouter,
    render,
    themesList,
    waitFor,
} from 'utils/tests';

// Mocks
import peopleList from 'mocks/peopleList.json';
const mockRouting = jest.fn();

// Components
import PersonForm from '../PersonForm';

const getRenderElement = (props: any) => render(
    <PersonForm { ...props } />
);

describe('<PersonForm />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('personform');

                expect(component).toBeVisible();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('personform');

            expect(component).toBeVisible();
        });

        it('should render with default values', () => {
            const { getByPlaceholderText } = getRenderElement({
                activePerson: peopleList[0],
            });

            const nameInput = getByPlaceholderText('e.g. Jane Doe');

            expect(nameInput).toBeVisible();

            expect(nameInput).toHaveAttribute('value', peopleList[0].name);
        });
    });

    describe('Basic behaviour: ', () => {
        beforeEach(() => {
            mockNextUseRouter({
                push: mockRouting,
            });
        });

        afterEach(cleanup);

        it('should update an input', () => {
            const { getByPlaceholderText } = getRenderElement({
                activePerson: peopleList[0],
            });

            const nameInput = getByPlaceholderText('e.g. Jane Doe');

            expect(nameInput).toHaveAttribute('value', peopleList[0].name);

            fireEvent.change(nameInput, { target: { value: 'potato' } });

            expect(nameInput).toHaveAttribute('value', 'potato');
        });

        it('should route home on click in cancel', async () => {
            const { getByText } = getRenderElement({});

            const button = getByText('Cancel');

            fireEvent.click(button);

            await waitFor(() => expect(mockRouting).toHaveBeenCalledTimes(1));
        });

        it('should route home after saving an edit', async () => {
            const { getByPlaceholderText, getByText } = getRenderElement({
                activePerson: peopleList[0],
                submitText  : 'Edit',
            });

            const nameInput = getByPlaceholderText('e.g. Jane Doe');

            expect(nameInput).toHaveAttribute('value', peopleList[0].name);

            fireEvent.change(nameInput, { target: { value: 'potato' } });

            expect(nameInput).toHaveAttribute('value', 'potato');

            const button = getByText('Edit');

            fireEvent.click(button);

            await waitFor(() => expect(mockRouting).toHaveBeenCalledTimes(2));
        });

        it('should route home after saving a new person', async () => {
            const { getByPlaceholderText, getByText } = getRenderElement({
                submitText: 'Save',
            });

            const nameInput = getByPlaceholderText('e.g. Jane Doe');

            fireEvent.change(nameInput, { target: { value: 'potato' } });

            expect(nameInput).toHaveAttribute('value', 'potato');

            const button = getByText('Save');

            fireEvent.click(button);

            await waitFor(() => expect(mockRouting).toHaveBeenCalledTimes(3));
        });
    });
});
