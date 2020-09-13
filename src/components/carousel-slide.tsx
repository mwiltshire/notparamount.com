import React from 'react';
import { css } from '@emotion/core';

const CarouselSlide: React.FC = ({ children }) => (
  <div
    css={css`
      position: relative;
      min-width: 100%;
      padding-left: 1rem;
    `}
  >
    <div
      css={css`
        position: relative;
        overflow: hidden;
        height: 65vmin;
      `}
    >
      {children}
    </div>
  </div>
);

export default CarouselSlide;
