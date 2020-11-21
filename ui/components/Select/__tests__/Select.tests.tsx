import {
    fireEvent,
    render,
    themesList,
} from 'utils/tests';

// Mocks
import MockOptions from 'mocks/countries.json';

// Components
import Select from '../Select';

// Element without optional props
const getBasicRenderElement = ({ theme, ...props }: any) => render(
    <Select
        id="dummySelect"
        label="Dummy Label"
        onChange={ jest.fn() }
        options={ MockOptions }
        { ...props }
    />
);

// Element without some default props
const getRenderElement = ({ theme, ...props }: any) => render(
    <Select
        hint="Dummy Hint"
        id="dummySelect"
        label="Dummy Label"
        onChange={ jest.fn() }
        options={ MockOptions }
        value="Portugal"
        { ...props }
    />
);

describe('<Select />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('select');

                expect(component).toBeVisible();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render basic select properly', () => {
            const { getByTestId } = getBasicRenderElement({});

            const component = getByTestId('select');

            expect(component).toBeVisible();
        });

        it('should render properly with all props', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('select');

            expect(component).toBeVisible();
        });

        it('should have default styles and theme', () => {
            const { getByTestId, getByText } = getRenderElement({});

            const component = getByTestId('select');
            const selectComponent = component.querySelector('select');
            const labelComponent = getByText('Dummy Label');

            expect(selectComponent).toHaveStyleRule('border-bottom', '.1rem solid #00234B');
            expect(labelComponent).toHaveStyleRule('color', '#778CA3');
        });

        it('should have specific styles and theme when select is focused', () => {
            const { getByTestId, getByText } = getRenderElement({});

            const component = getByTestId('select');
            const selectComponent = component.querySelector('select');
            const labelComponent = getByText('Dummy Label');

            selectComponent.focus();

            expect(selectComponent).toHaveStyleRule('border-bottom', '.1rem solid #624DE3');
            expect(labelComponent).toHaveStyleRule('color', '#624DE3');
        });

        it('should have specific styles focused and other when out of focus', () => {
            const { getByTestId, getByText } = getRenderElement({});

            const component = getByTestId('select');
            const selectComponent = component.querySelector('select');
            const labelComponent = getByText('Dummy Label');

            expect(selectComponent).toHaveStyleRule('border-bottom', '.1rem solid #00234B');
            expect(labelComponent).toHaveStyleRule('color', '#778CA3');

            selectComponent.focus();

            expect(selectComponent).toHaveStyleRule('border-bottom', '.1rem solid #624DE3');
            expect(labelComponent).toHaveStyleRule('color', '#624DE3');

            selectComponent.blur();

            expect(selectComponent).toHaveStyleRule('border-bottom', '.1rem solid #00234B');
            expect(labelComponent).toHaveStyleRule('color', '#778CA3');
        });

        describe('Hint: ', () => {
            it('should have no hint when none is provided', () => {
                const { getByTestId } = getRenderElement({ hint: '' });

                const component = getByTestId('select');

                expect(component.querySelector('span')).toBeFalsy();
            });

            it('should have a specific hint when provided', () => {
                const { getByText } = getRenderElement({ hint: 'Test Hint' });

                const component = getByText('Test Hint');

                expect(component).toBeVisible();
            });
        });

        describe('Value: ', () => {
            it('should fail when provided select value is not an option', () => {
                const { getByTestId } = getRenderElement({});

                const component = getByTestId('select');
                const selectComponent = component.querySelector('select');

                expect(selectComponent).not.toHaveAttribute('value');
            });

            it('should have no value when none is provided to select', () => {
                const { getByTestId } = getRenderElement({});

                const component = getByTestId('select');
                const selectComponent = component.querySelector('select');

                expect(selectComponent).not.toHaveAttribute('value');
            });

            it('should use default value when none is provided', async () => {
                const { getByDisplayValue } = getRenderElement({ value: '' });

                const component = getByDisplayValue('Afghanistan');

                expect(component).toBeVisible();
            });

            it('should have a default value when provided', async () => {
                const { getByDisplayValue } = getRenderElement({ value: 'Afghanistan' });

                const component = getByDisplayValue('Afghanistan');

                expect(component).toBeVisible();
            });
        });
    });

    describe('Basic Functionality: ', () => {
        it('should update value', () => {
            const mockOnChange = jest.fn();

            const { getByTestId } = getRenderElement({ onChange: mockOnChange });

            const component = getByTestId('select');
            const selectComponent = component.querySelector('select');

            fireEvent.change(selectComponent, { target: { value: 'Portugal' } });

            expect(mockOnChange).toHaveBeenCalledTimes(1);
        });
    });
});
