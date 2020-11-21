/* eslint-disable @typescript-eslint/explicit-module-boundary-types, no-import-assign, react/prop-types, no-import-assign */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { matchers } from '@emotion/jest';
import * as nextRouter from 'next/router';

// Theme
import { Dark, Light } from 'ui/theme';

// Context
import { AppThemeProvider } from 'context/AppTheme';

export function mockNextUseRouter({
    asPath   = '/edit/1',
    pathname = '/edit/$id',
    query    = { id: 1 },
    route    = '/edit/$id',
    ...props
}) {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({
        route,
        pathname,
        query,
        asPath,
        ...props,
    }));
}

const themes = {
    dark : Dark,
    light: Light,
};

export const themesList = Object.keys(themes);

const Providers = ({ children, theme = 'light' }) => (
    <AppThemeProvider>
        <ThemeProvider theme={ themes[theme] }>
            { children }
        </ThemeProvider>
    </AppThemeProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: Providers, ...options });

expect.extend(matchers);

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };