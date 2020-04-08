import React, { FC } from 'react';
import { css } from '@emotion/core';

type LinkProps = {
  to: string;
};

const Link: FC<LinkProps> = ({ to, children }) => (
  <a
    href={to}
    css={css`
      text-decoration: none;
    `}
  >
    {children}
  </a>
);

export default Link;
