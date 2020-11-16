import React from 'react';
import { useTheme } from '@emotion/react';

import ThemeSwitcher from 'ui/blocks/ThemeSwitcher';
import User from 'ui/blocks/User';

import { InnerWrapper, StyledHeader } from './styles';

const Header = (): React.ReactElement => {
    const { header, textColor } = useTheme();

    return (
        <StyledHeader
            bgColor={ header }
            color={ textColor }
        >
            <InnerWrapper>
                <ThemeSwitcher />
                <User />
            </InnerWrapper>
        </StyledHeader>
    );
};

export default Header;
