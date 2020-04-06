import React, { FC } from 'react';
import { css } from '@emotion/core';

type SectionHeadProps = {
  light?: boolean;
};

const SectionHeader: FC<SectionHeadProps> = ({ light = false, children }) => (
  <h2
    css={css`
      font-size: 0.7rem;
      font-weight: 800;
      padding: 2rem 0;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      color: ${light ? '#fff' : '#5b6072'};
    `}
  >
    {children}
  </h2>
);

export default SectionHeader;
