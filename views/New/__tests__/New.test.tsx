import {
    render,
    themesList,
} from 'utils/tests';

// Components
import New from '../New';

const getRenderElement = ({ theme, ...props }: any) => render(
    <New { ...props }/>
);

describe('<New />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('newpage');

                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('newpage');

            expect(component).toBeVisible();
        });
    });
});
