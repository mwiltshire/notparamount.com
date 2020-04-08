import React, { FC } from 'react';
import { css } from '@emotion/core';

const SectionHeader: FC = ({ children }) => (
  <h2
    css={css`
      font-size: 0.7rem;
      font-weight: 800;
      padding: 2rem 0;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
    `}
  >
    {children}
  </h2>
);

export default SectionHeader;
