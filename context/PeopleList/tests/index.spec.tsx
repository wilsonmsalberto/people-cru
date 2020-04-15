import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PeopleListConsumer, PeopleListProvider } from '../';

const DummyEl = (): React.ReactNode => <>Dummy</>;
const ConsumerElement = <PeopleListConsumer>{DummyEl}</PeopleListConsumer>;
const ProviderElement = <PeopleListProvider>{ConsumerElement}</PeopleListProvider>;
const getConsumer = (): RenderResult => render(ConsumerElement);

describe('PeopleListConsumer', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const { getByText } = getConsumer();

      expect(getByText('Dummy')).toBeTruthy();
    });

    it('should render with a list of people', () => {
      const { getByText } = render(ProviderElement);
      expect(getByText('Dummy')).toBeTruthy();
    });
  });
});
