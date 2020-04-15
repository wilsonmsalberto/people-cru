/** @jsx jsx */
import { useContext } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

// Theming
import { ThemeProvider } from 'emotion-theming';
import { css, Global, jsx } from '@emotion/core';
import { GlobalStyles, ThemeWrapper } from 'ui/theme';

// Context
import { AppThemeContext, AppThemeProvider } from 'context/AppTheme';

// Components
import Header from 'ui/blocks/Header';

// Styles
import { Main, InnerWrapper } from 'ui/theme/Global.styles';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const { theme } = useContext(AppThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <ThemeWrapper>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />

        <Main>
          <InnerWrapper>
            <Component {...pageProps}></Component>
          </InnerWrapper>
        </Main>

        <Global styles={css(GlobalStyles.Globals)} />
      </ThemeWrapper>
    </ThemeProvider>
  );
};

const withProvidersApp = (props: AppProps): React.ReactElement => (
  <AppThemeProvider>
    <App {...props} />
  </AppThemeProvider>
);

export default withProvidersApp;
