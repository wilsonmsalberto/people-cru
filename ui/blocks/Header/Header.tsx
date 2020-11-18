import React from 'react';

import ThemeSwitcher from 'ui/blocks/ThemeSwitcher';
import User from 'ui/blocks/User';

import { InnerWrapper, StyledHeader } from './styles';

const Header = (): React.ReactElement => (
    <StyledHeader data-testid="header">
        <InnerWrapper>
            <ThemeSwitcher />
            <User />
        </InnerWrapper>
    </StyledHeader>
);

export default Header;
