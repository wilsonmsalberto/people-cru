import ListHeader from './ListHeader';
import ListItems from './ListItems';

import StyledTable from './styles';

const PeopleList = (): React.ReactElement => (
    <StyledTable>
        <ListHeader />
        <ListItems />
    </StyledTable>
);

export default PeopleList;
