import React from 'react';
import { useTheme } from 'emotion-theming';

import { StyledHeader, InnerWrapper } from './styles';

import ThemeSwitcher from 'ui/blocks/ThemeSwitcher';
import User from 'ui/blocks/User';

const Header = (): React.ReactElement => {
  const { header, textColor } = useTheme();

  return (
    <StyledHeader bgColor={header} color={textColor}>
      <InnerWrapper>
        <ThemeSwitcher />
        <User />
      </InnerWrapper>
    </StyledHeader>
  );
};

export default Header;
