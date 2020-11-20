/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import '@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { Dark, Light } from 'ui/theme';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            pathname: '/edit/$id',
            route   : '/edit/$id',
            query   : { id: 1 },
            asPath  : '/edit/1',
        };
    },
}));

const themes = {
    dark : Dark,
    light: Light,
};

export const themesList = Object.keys(themes);

const Providers = ({ children, theme = 'light' }) => (
    <ThemeProvider theme={ themes[theme] }>
        { children }
    </ThemeProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };