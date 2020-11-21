import React from 'react';
import { Global, css, useTheme } from '@emotion/react';

const Wrapper = ({ children }: { children: React.ReactNode }): React.ReactElement => {
    const { background, textColor } = useTheme();

    const bodyStyles = `
        body {
            color: ${textColor};
            background-color: ${background};
        }
    `;

    return (
        <div data-testid="themewrapper">
            <Global styles={ css(bodyStyles) } />
            { children }
        </div>
    );
};

export default Wrapper;
