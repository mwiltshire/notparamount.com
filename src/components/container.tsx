import React, { FC } from 'react';
import { css } from '@emotion/core';
import { BP_MIN_LG } from '../breakpoints';

const Container: FC = ({ children }) => (
  <div
    css={css`
      margin-left: auto;
      margin-right: auto;
      padding: 0;
      width: 100%;
      ${BP_MIN_LG} {
        padding-left: 30px;
        padding-right: 30px;
      }
    `}
  >
    {children}
  </div>
);

export default Container;
