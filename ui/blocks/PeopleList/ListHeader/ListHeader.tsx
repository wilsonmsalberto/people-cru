// Theme
import { TableHeader } from './styles';

const ListHeader = (): React.ReactElement => (
    <TableHeader data-testid="listheader">
        <tr>
            <th>Employee</th>
            <th>Job Title</th>
            <th>Country</th>
            <th colSpan={ 2 }>Salary</th>
        </tr>
    </TableHeader>
);

export default ListHeader;
