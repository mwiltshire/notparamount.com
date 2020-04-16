import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

type LinkProps = {
  to: string;
  decoration?: string;
  [k: string]: any;
};

const linkStyles = (decoration: string) => css`
  text-decoration: none;
  color: inherit;
  font-weight: 800;
  background-image: linear-gradient(${decoration} 0px, ${decoration} 100%);
  background-size: 100% 3px;
  color: rgb(0, 0, 0);
  background-repeat: no-repeat;
  background-position: 0px 100%;
  &:visited {
    color: inherit;
  }
`;

export const ExternalLink: FC<LinkProps> = ({
  to,
  decoration = 'currentColor',
  children,
  ...restProps
}) => (
  <a href={to} css={linkStyles(decoration)} {...restProps}>
    {children}
  </a>
);

export const GatsbyLink: FC<LinkProps> = ({
  to,
  decoration,
  children,
  ...restProps
}) => (
  <Link to={to} css={decoration ? linkStyles(decoration) : null} {...restProps}>
    {children}
  </Link>
);
