import React, { useContext } from 'react';
import { useTheme } from 'emotion-theming';

// Context
import { AppThemeContext } from 'context/AppTheme';

// Components
import { ContrastIcon } from 'ui/components/SvgIcons';

// Styles
import { ThemeSwitcherButton } from './styles';

const ThemeSwitcher = (): React.ReactElement => {
  const { switchTheme } = useContext(AppThemeContext);

  const { buttonBgColor, buttonTextColor } = useTheme();

  return (
    <ThemeSwitcherButton
      bgColor={buttonBgColor}
      color={buttonTextColor}
      onClick={(): void => switchTheme()}
    >
      <ContrastIcon />
    </ThemeSwitcherButton>
  );
};
export default ThemeSwitcher;
