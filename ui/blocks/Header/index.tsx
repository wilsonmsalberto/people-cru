import React from 'react';

import { useTheme } from 'emotion-theming';

import { StyledHeader } from './styles';

import ThemeSwitcher from 'ui/blocks/ThemeSwitcher';

const Header = (): React.ReactElement => {
  const { white, textColor } = useTheme();

  return (
    <StyledHeader bgColor={white} color={textColor}>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
