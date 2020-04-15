import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { Wrapper, TitleWrapper, Title, SubTitle } from './styles';

import { PeopleListContext, PeopleListProvider } from 'context/PeopleList';

import Button from 'ui/components/Button';
import PeopleList from 'ui/blocks/PeopleList/index';

const Home = (): React.ReactElement => {
  const { resultsAmount } = useContext(PeopleListContext);
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

const withContextHome = (): React.ReactElement => (
  <PeopleListProvider>
    <Home />
  </PeopleListProvider>
);

export default withContextHome;
