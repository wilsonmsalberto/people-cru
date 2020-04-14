import React from 'react';
import { useRouter } from 'next/router';

import { PeopleListConsumer, PeopleListProvider } from 'context/PeopleList';
import { PersonLine, PersonName, PersonBirth, ButtonCell, EditButton, SalaryCell } from './styles';

const ListItems = ({ peopleList }: { peopleList: Array<object> }): React.ReactElement => {
  const router = useRouter();

  const handleEditClick = (id: number): void => {
    router.push(`/edit/[id]`, `/edit/${id}`);
  };

  return (
    <tbody>
      {peopleList.map((person: Record<string, any>) => (
        <PersonLine key={person.id}>
          <td>
            <PersonName>{person.name}</PersonName>
            <PersonBirth>{person.birthDate}</PersonBirth>
          </td>
          <td>{person.job}</td>
          <td>{person.country}</td>
          <SalaryCell>
            {person.salary} <span>per month</span>
          </SalaryCell>
          <ButtonCell>
            <EditButton onClick={(): void => handleEditClick(person.id)} btnStyle="secondary">
              Edit
            </EditButton>
          </ButtonCell>
        </PersonLine>
      ))}
    </tbody>
  );
};

const withContextListItems = (props: Record<string, any>): React.ReactElement => (
  <PeopleListProvider>
    <PeopleListConsumer>
      {(peopleListContext): React.ReactNode | null =>
        peopleListContext && <ListItems peopleList={peopleListContext.peopleList} {...props} />
      }
    </PeopleListConsumer>
  </PeopleListProvider>
);

export default withContextListItems;
