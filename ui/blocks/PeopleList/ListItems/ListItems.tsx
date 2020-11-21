import { useContext } from 'react';
import { useRouter } from 'next/router';
import { IPerson } from 'PersonTypes';

import { PeopleListContext, PeopleListProvider } from 'context/PeopleList';

import {
    ButtonCell,
    EditButton,
    PersonBirth,
    PersonLine,
    PersonName,
    SalaryCell,
} from './styles';

const ListItems = (): React.ReactElement => {
    const { peopleList } = useContext(PeopleListContext);

    const router = useRouter();

    return (
        <tbody data-testid="listitems">
            { peopleList.map((person: IPerson) => (
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
                        <EditButton variant="secondary" onClick={ (): void => handleEditClick(person.id) }>
                            Edit
                        </EditButton>
                    </ButtonCell>
                </PersonLine>
            )) }
        </tbody>
    );

    function handleEditClick(id: number): void {
        router.push(`/edit/${id}`);
    }
};

const withContextListItems = (): React.ReactElement => (
    <PeopleListProvider>
        <ListItems />
    </PeopleListProvider>
);

export default withContextListItems;
