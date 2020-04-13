import React, { FC } from 'react';
import { css } from '@emotion/core';

type LinkProps = {
  to: string;
  decoration?: string;
};

const Link: FC<LinkProps> = ({ to, decoration = 'currentColor', children }) => (
  <a
    href={to}
    css={css`
      position: relative;
      text-decoration: none;
      color: inherit;
      font-weight: 800;
      z-index: 1;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background: ${decoration};
        z-index: -1;
      }
      &:visited {
        color: inherit;
      }
    `}
  >
    <span>{children}</span>
  </a>
);

export default Link;
