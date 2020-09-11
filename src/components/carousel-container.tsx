import React from 'react';
import { css } from '@emotion/core';

const CarouselContainer: React.FC = ({ children }) => (
  <div
    css={css`
      display: flex;
      user-select: none;
      margin-left: -1rem;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -webkit-tap-highlight-color: transparent;
    `}
  >
    {children}
  </div>
);

export default CarouselContainer;
