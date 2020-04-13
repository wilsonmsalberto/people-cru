import React from 'react';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Wrapper = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { background, textColor } = useTheme();

  const bodyStyles = `
    body {
        color: ${textColor};
        background-color: ${background}
    }
  `;

  return (
    <div>
      {children}
      <Global styles={css(bodyStyles)} />
    </div>
  );
};

export default Wrapper;
