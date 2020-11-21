import { useContext } from 'react';
import { useRouter } from 'next/router';
import { IPerson } from 'PersonTypes';

import PersonForm from 'ui/blocks/PersonForm';

import { PeopleListContext, PeopleListProvider } from 'context/PeopleList';

import { SubTitle, Title, TitleWrapper, Wrapper } from './styles';

const NewPerson = (): React.ReactElement => {
    const { peopleList } = useContext(PeopleListContext);
    const router = useRouter();
    const { id } = router?.query;

    const currentPerson: IPerson = peopleList?.find((person: IPerson) => person?.id === Number(id));

    return (
        <Wrapper data-testid="editpage">
            <TitleWrapper>
                <Title>Edit employee</Title>
                <SubTitle>Edit the information of your employee</SubTitle>
            </TitleWrapper>

            <PersonForm
                activePerson={ currentPerson }
                submitText="Save"
            />
        </Wrapper>
    );
};

const withContextNewPerson = (): React.ReactElement => (
    <PeopleListProvider>
        <NewPerson />
    </PeopleListProvider>
);

export default withContextNewPerson;
