import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Light, Dark } from 'ui/theme';

export interface ThemeContextInterface {
  activeThemeName: string;
  setActiveThemeName: Function;
  switchTheme: Function;
  theme: Record<string, any>;
}

export const AppThemeContext = createContext({} as ThemeContextInterface);
const { Provider } = AppThemeContext;

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const themes: Record<string, any> = {
    dark: Dark,
    light: Light,
  };

  const [activeThemeName, setActiveThemeName] = useState('light');
  const [theme, setTheme] = useState(themes.light);

  const switchTheme = useCallback((): void => {
    if (activeThemeName === 'light') {
      setActiveThemeName('dark');
    }

    if (activeThemeName === 'dark') {
      setActiveThemeName('light');
    }
  }, [activeThemeName, setActiveThemeName]);

  useEffect(() => {
    const pickedTheme = localStorage.getItem('themeName');

    if (pickedTheme) {
      setActiveThemeName(pickedTheme);
    }
  }, [setActiveThemeName]);

  useEffect(() => {
    setTheme(themes[activeThemeName]);
    localStorage.setItem('themeName', activeThemeName);
  }, [activeThemeName, themes]);

  return (
    <Provider
      value={{
        activeThemeName,
        setActiveThemeName,
        switchTheme,
        theme,
      }}
    >
      {children}
    </Provider>
  );
};
