import React from 'react';
import { useRouter } from 'next/router';

import PersonForm from 'ui/blocks/PersonForm';

import { PeopleListConsumer, PeopleListProvider } from 'context/PeopleList';

import { SubTitle, Title, TitleWrapper, Wrapper } from './styles';

const NewPerson = ({ peopleList }: { peopleList: Array<object> }): React.ReactElement => {
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
    <PeopleListConsumer>
      {(peopleListContext): React.ReactNode | null =>
        peopleListContext && <NewPerson peopleList={peopleListContext.peopleList} />
      }
    </PeopleListConsumer>
  </PeopleListProvider>
);

export default withContextNewPerson;
