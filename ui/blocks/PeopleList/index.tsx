import React from 'react';

import ListHeader from './ListHeader';
import ListItems from './ListItems';

import StyledTable from './styles';

const PeopleList = (): React.ReactElement => {
  return (
    <StyledTable>
      <ListHeader />
      <ListItems />
    </StyledTable>
  );
};

export default PeopleList;
