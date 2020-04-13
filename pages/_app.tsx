/** @jsx jsx */
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

// Styles
import { ThemeProvider } from 'emotion-theming';
import { css, Global, jsx } from '@emotion/core';

import { Main } from './styles';

import { GlobalStyles, Dark, Light, ThemeWrapper } from 'ui/theme';
import Header from 'ui/blocks/Header';

const UserListApp: NextPage<AppProps> = ({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}) => {
  const [activeTheme, setActiveTheme] = useState('light');
  const [theme, setTheme] = useState(activeTheme);

  const themes: Record<string, any> = {
    light: Light,
    dark: Dark,
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setActiveTheme(savedTheme || theme);
  }, [theme]);

  return (
    <ThemeProvider theme={themes[activeTheme]}>
      <ThemeWrapper>
        <Header setTheme={setTheme} activeTheme={activeTheme} />

        <Main>
          <Component {...pageProps}></Component>
        </Main>

        <Global styles={css(GlobalStyles.Globals)} />
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default UserListApp;
