/** @jsx jsx */
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

// Theming
import { ThemeProvider } from 'emotion-theming';
import { css, Global, jsx } from '@emotion/core';
import { GlobalStyles, ThemeWrapper } from 'ui/theme';

// Context
import { AppThemeConsumer, AppThemeProvider } from 'context/AppTheme';

// Components
import Header from 'ui/blocks/Header';

// Styles
import { Main } from './styles';

const UserListApp: NextPage<AppProps> = ({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}) => {
  return (
    <AppThemeProvider>
      <AppThemeConsumer>
        {(appThemeContext): React.ReactNode | null =>
          appThemeContext && (
            <ThemeProvider theme={appThemeContext.theme}>
              <ThemeWrapper>
                <Head>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap"
                    rel="stylesheet"
                  />
                </Head>
                <Header />

                <Main>
                  <Component {...pageProps}></Component>
                </Main>

                <Global styles={css(GlobalStyles.Globals)} />
              </ThemeWrapper>
            </ThemeProvider>
          )
        }
      </AppThemeConsumer>
    </AppThemeProvider>
  );
};

export default UserListApp;
