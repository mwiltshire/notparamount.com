import React, { FC } from 'react';
import { css } from '@emotion/core';
import { BP_MIN_SM, BP_MIN_MD, BP_MIN_LG, BP_MIN_XL } from '../breakpoints';

type ColProps = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
  xlOffset?: number;
};

type RowProps = {
  align?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
};

export const Row: FC<RowProps> = ({ align, children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;
        ${align ? `align-items: ${align};` : null}
      `}
    >
      {children}
    </div>
  );
};

export const Col: FC<ColProps> = ({
  sm,
  md,
  lg,
  xl,
  smOffset = 0,
  mdOffset = 0,
  lgOffset = 0,
  xlOffset = 0,
  children = 0
}) => {
  const media: { [k: string]: string } = {
    sm: BP_MIN_SM,
    md: BP_MIN_MD,
    lg: BP_MIN_LG,
    xl: BP_MIN_XL
  };
  const dimensions = { sm, md, lg, xl };
  const offsets: { [k: string]: number } = {
    sm: smOffset,
    md: mdOffset,
    lg: lgOffset,
    xl: xlOffset
  };

  return (
    <div
      css={css`
        display: block;
        flex: 0 0 100%;
        padding-right: 15px;
        padding-left: 15px;
        ${Object.entries(dimensions)
          .filter(([, value]) => Boolean(value))
          .map(([breakpoint, value]) => {
            const width = (100 / 12) * (value as number);
            return `
            ${media[breakpoint]} {
              flex-basis: ${width}%;
              max-width: ${width}%;
              display: block;
              ${
                offsets[breakpoint]
                  ? `margin-left: ${(100 / 12) * offsets[breakpoint]}%`
                  : ''
              }
            }
          `;
          })}
      `}
    >
      {children}
    </div>
  );
};
