import React, { useCallback, useEffect } from 'react';

import { useTheme } from 'emotion-theming';

import { StyledHeader, ThemeSwitcherButton } from './styles';

import { ContrastIcon } from 'ui/components/SvgIcons';

const Header = ({
  activeTheme,
  setTheme,
}: {
  activeTheme: string;
  setTheme: Function;
}): React.ReactElement => {
  const { secondary, primary, buttonBgColor, buttonTextColor } = useTheme();

  const applyTheme = useCallback(
    (theme: string): void => {
      setTheme(theme);
      localStorage.setItem('theme', theme);
    },
    [setTheme]
  );

  const handleThemeSwitch = useCallback(
    (theme: string): void => {
      if (theme === 'light') {
        applyTheme('dark');
      }

      if (theme === 'dark') {
        applyTheme('light');
      }
    },
    [applyTheme]
  );

  useEffect(() => {
    const savedTheme = (localStorage && localStorage.getItem('theme')) || '';

    if (savedTheme && savedTheme !== activeTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme(activeTheme);
    }
  }, [activeTheme, applyTheme]);

  return (
    <StyledHeader bgColor={secondary} color={primary}>
      <ThemeSwitcherButton
        bgColor={buttonBgColor}
        color={buttonTextColor}
        onClick={(): void => handleThemeSwitch(activeTheme)}
      >
        <ContrastIcon />
      </ThemeSwitcherButton>
    </StyledHeader>
  );
};

const withContextHeader = (props: Record<string, any>): React.ReactElement => (
  <Header activeTheme={props.activeTheme} setTheme={props.setTheme} {...props} />
);

export default withContextHeader;
