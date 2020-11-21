// Styles
import { User, UserImage, UserName, UserRole } from './styles';

const UserBlock = (): React.ReactElement => (
    <User data-testid="user">
        <UserImage />
        <UserName>Julie Howard</UserName>
        <UserRole>Admin</UserRole>
    </User>
);

export default UserBlock;
