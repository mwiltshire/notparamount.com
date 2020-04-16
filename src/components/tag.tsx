import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from './layout';

type TagProps = {
  background: keyof Theme['colors'];
  color: keyof Theme['colors'];
};

const Tag: FC<TagProps> = ({ background, color, children }) => {
  const theme = useTheme<Theme>();
  return (
    <span
      css={css`
        font-size: ${theme.fontSizes.sm};
        border-radius: 0.3rem;
        padding: 0.3rem;
        background: ${theme.colors[background]};
        color: ${theme.colors[color]};
      `}
    >
      {children}
    </span>
  );
};

export default Tag;
