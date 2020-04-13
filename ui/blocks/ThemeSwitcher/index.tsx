import React from 'react';
import { useTheme } from 'emotion-theming';

// Context
import { AppThemeConsumer } from 'context/AppTheme';

// Components
import { ContrastIcon } from 'ui/components/SvgIcons';

// Styles
import { ThemeSwitcherButton } from './styles';

const ThemeSwitcher = ({ switchTheme }: { switchTheme: Function }): React.ReactElement => {
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

const withContextThemeSwitcher = (props: Record<string, any>): React.ReactElement => (
  <AppThemeConsumer>
    {(appThemeContext): React.ReactNode | null =>
      appThemeContext && <ThemeSwitcher switchTheme={appThemeContext.switchTheme} {...props} />
    }
  </AppThemeConsumer>
);

export default withContextThemeSwitcher;
