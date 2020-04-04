import React, { FC } from 'react';
import { css } from '@emotion/core';

const Container: FC = ({ children }) => (
  <div
    css={css`
      margin-left: auto;
      margin-right: auto;
      padding: 0 30px;
      width: 100%;
    `}
  >
    {children}
  </div>
);

export default Container;
