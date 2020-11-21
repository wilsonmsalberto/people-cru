import ListHeader from './ListHeader';
import ListItems from './ListItems';

import StyledTable from './styles';

const PeopleList = (): React.ReactElement => (
    <StyledTable data-testid="peoplelist">
        <ListHeader />
        <ListItems />
    </StyledTable>
);

export default PeopleList;
