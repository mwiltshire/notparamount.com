import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from './layout';

const SectionHeader: FC = ({ children }) => {
  const theme = useTheme<Theme>();
  return (
    <h2
      css={css`
        font-size: 1rem;
        font-weight: ${theme.fontWeights.bold};
        padding: 2rem 0;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
      `}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
