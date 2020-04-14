import React from 'react';
import { useTheme } from 'emotion-theming';

import { StyledHeader } from './styles';

import ThemeSwitcher from 'ui/blocks/ThemeSwitcher';
import User from 'ui/blocks/User';

const Header = (): React.ReactElement => {
  const { white, textColor } = useTheme();

  return (
    <StyledHeader bgColor={white} color={textColor}>
      <ThemeSwitcher />
      <User />
    </StyledHeader>
  );
};

export default Header;
