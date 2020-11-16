import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { PeopleListContext, PeopleListProvider } from 'context/PeopleList';

import {
    ButtonCell, EditButton, PersonBirth, PersonLine, PersonName, SalaryCell,
} from './styles';

const ListItems = (): React.ReactElement => {
    const { peopleList } = useContext(PeopleListContext);

    const router = useRouter();

    const handleEditClick = (id: number): void => {
        router.push(`/edit/[id]`, `/edit/${id}`);
    };

    return (
        <tbody>
            { peopleList.map((person: Record<string, any>) => (
                <PersonLine key={ person.id }>
                    <td>
                        <PersonName>{ person.name }</PersonName>
                        <PersonBirth>{ person.birthDate }</PersonBirth>
                    </td>
                    <td>{ person.job }</td>
                    <td>{ person.country }</td>
                    <SalaryCell>
                        { person.salary } <span>per month</span>
                    </SalaryCell>
                    <ButtonCell>
                        <EditButton
                            onClick={ (): void => handleEditClick(person.id) }
                            btnStyle="secondary"
                        >
                            Edit
                        </EditButton>
                    </ButtonCell>
                </PersonLine>
            )) }
        </tbody>
    );
};

const withContextListItems = (): React.ReactElement => (
    <PeopleListProvider>
        <ListItems />
    </PeopleListProvider>
);

export default withContextListItems;
