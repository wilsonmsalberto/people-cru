import React from 'react';

import { PeopleListConsumer, PeopleListProvider } from 'context/PeopleList';
import { ButtonCell, EditButton } from './styles';

const ListItems = ({ peopleList }: { peopleList: Array<object> }): React.ReactElement => {
  return (
    <tbody>
      {peopleList.map((person: Record<string, any>) => (
        <tr key={person.id}>
          <td>
            <p>{`${person.first_name} ${person.last_name}`}</p>
            <p>{person.birth_date}</p>
          </td>
          <td>{person.job_title}</td>
          <td>{person.country}</td>
          <td>{person.salary}</td>
          <ButtonCell>
            <EditButton btnStyle="secondary">Edit</EditButton>
          </ButtonCell>
        </tr>
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
