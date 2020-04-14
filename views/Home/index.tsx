import React from 'react';
import { useRouter } from 'next/router';

import { Wrapper, TitleWrapper, Title, SubTitle } from './styles';

import { PeopleListProvider, PeopleListConsumer } from 'context/PeopleList';

import Button from 'ui/components/Button';
import PeopleList from 'ui/blocks/PeopleList/index';

const Home = ({ resultsAmount }: { resultsAmount: number }): React.ReactElement => {
  const router = useRouter();

  const handleAddNewClick = (): Promise<any> => router.push('/new');

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>People</Title>
          <SubTitle>{resultsAmount} employees</SubTitle>
        </TitleWrapper>

        <Button btnStyle="primary" type="submit" onClick={handleAddNewClick}>
          Add employee
        </Button>
      </Wrapper>
      <PeopleList />
    </>
  );
};

const withContextHome = (props: Record<string, any>): React.ReactElement => (
  <PeopleListProvider>
    <PeopleListConsumer>
      {(peopleListContext): React.ReactNode | null =>
        peopleListContext && <Home resultsAmount={peopleListContext.resultsAmount} {...props} />
      }
    </PeopleListConsumer>
  </PeopleListProvider>
);

export default withContextHome;
