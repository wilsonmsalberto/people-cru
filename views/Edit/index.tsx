import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import PersonForm from 'ui/blocks/PersonForm';

import { PeopleListContext, PeopleListProvider } from 'context/PeopleList';

import { SubTitle, Title, TitleWrapper, Wrapper } from './styles';

const NewPerson = (): React.ReactElement => {
  const { peopleList } = useContext(PeopleListContext);
  const router = useRouter();
  const { id } = router.query;

  const person: Record<string, any> =
    peopleList.find((person: Record<string, any>) => person.id === Number(id)) || {};

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>Edit employee</Title>
          <SubTitle>Edit the information of your employee</SubTitle>
        </TitleWrapper>

        <PersonForm activePerson={person} submitText="Save" />
      </Wrapper>
    </>
  );
};

const withContextNewPerson = (): React.ReactElement => (
  <PeopleListProvider>
    <NewPerson />
  </PeopleListProvider>
);

export default withContextNewPerson;
