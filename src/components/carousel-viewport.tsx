import React from 'react';
import { css } from '@emotion/core';

const CarouselViewport = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => (
  <div
    css={css`
      overflow: hidden;
      width: 100%;
      border-radius: 1rem;
      &.is-draggable {
        cursor: move;
        cursor: grab;
      }
      &.is-dragging {
        cursor: grabbing;
      }
    `}
    ref={ref}
  >
    {children}
  </div>
));

export default CarouselViewport;
