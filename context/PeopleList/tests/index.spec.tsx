import React from 'react';
import { RenderResult, render } from '@testing-library/react';

import { PeopleListConsumer, PeopleListProvider } from '../';

const DummyEl = (): React.ReactNode => <>Dummy</>;
const ConsumerElement = <PeopleListConsumer>{ DummyEl }</PeopleListConsumer>;
const ProviderElement = <PeopleListProvider>{ ConsumerElement }</PeopleListProvider>;
const getConsumer = (): RenderResult => render(ConsumerElement);

describe('PeopleListConsumer', () => {
    describe('Rendering', () => {
        it('should render properly', () => {
            const { getByText } = getConsumer();

            expect(getByText('Dummy')).toBeTruthy();
        });

        it('should render with a provider', () => {
            const { getByText } = render(ProviderElement);

            expect(getByText('Dummy')).toBeTruthy();
        });
    });
});
