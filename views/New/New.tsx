import PersonForm from 'ui/blocks/PersonForm';

import { SubTitle, Title, TitleWrapper, Wrapper } from './styles';

const NewPerson = (): React.ReactElement => (
    <Wrapper data-testid="newpage">
        <TitleWrapper>
            <Title>Add a new employee</Title>
            <SubTitle>Fill out the information of your new employee</SubTitle>
        </TitleWrapper>

        <PersonForm submitText="Add employee" />
    </Wrapper>
);

export default NewPerson;
