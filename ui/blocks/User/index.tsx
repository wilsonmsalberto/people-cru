import React from 'react';

import { useTheme } from '@emotion/react';

import { User, UserImage, UserName, UserRole } from './styles';

const UserBlock = (): React.ReactElement => {
    const { pippin, secondary, textColor } = useTheme();

    return (
        <User>
            <UserImage bgColor={ pippin || secondary } />
            <UserName color={ textColor }>Julie Howard</UserName>
            <UserRole color={ secondary }>Admin</UserRole>
        </User>
    );
};

export default UserBlock;
