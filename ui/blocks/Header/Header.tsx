import React from 'react';

// Components
import ThemeSwitcher from 'ui/blocks/ThemeSwitcher';
import User from 'ui/blocks/User';

// Styles
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
