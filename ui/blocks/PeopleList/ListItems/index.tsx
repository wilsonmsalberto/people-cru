import React from 'react';

import { PeopleListConsumer, PeopleListProvider } from 'context/PeopleList';
import { PersonLine, PersonName, PersonBirth, ButtonCell, EditButton, SalaryCell } from './styles';

const ListItems = ({ peopleList }: { peopleList: Array<object> }): React.ReactElement => {
  return (
    <tbody>
      {peopleList.map((person: Record<string, any>) => (
        <PersonLine key={person.id}>
          <td>
            <PersonName>{`${person.first_name} ${person.last_name}`}</PersonName>
            <PersonBirth>{person.birth_date}</PersonBirth>
          </td>
          <td>{person.job_title}</td>
          <td>{person.country}</td>
          <SalaryCell>
            {person.salary} <span>per month</span>
          </SalaryCell>
          <ButtonCell>
            <EditButton btnStyle="secondary">Edit</EditButton>
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
