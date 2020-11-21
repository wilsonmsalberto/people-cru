import { useContext } from 'react';
import { useRouter } from 'next/router';

// Context
import { PeopleListContext, PeopleListProvider } from 'context/PeopleList';

// Components
import Button from 'ui/components/Button';
import PeopleList from 'ui/blocks/PeopleList/index';

// Styles
import { SubTitle, Title, TitleWrapper, Wrapper } from './styles';

const Home = (): React.ReactElement => {
    const { resultsAmount } = useContext(PeopleListContext);
    const router = useRouter();

    return (
        <>
            <Wrapper data-testid="home">
                <TitleWrapper>
                    <Title>People</Title>
                    <SubTitle>{ resultsAmount } employees</SubTitle>
                </TitleWrapper>

                <Button
                    type="submit"
                    onClick={ (): Promise<any> => router.push('/new') }
                >
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
