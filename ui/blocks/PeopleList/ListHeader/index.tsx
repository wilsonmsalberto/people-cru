import React from 'react';

import TableHeader from './styles';

const ListHeader = (): React.ReactElement => {
  return (
    <TableHeader>
      <tr>
        <th>Employee</th>
        <th>Job Title</th>
        <th>Country</th>
        <th colSpan={2}>Salary</th>
      </tr>
    </TableHeader>
  );
};

export default ListHeader;
