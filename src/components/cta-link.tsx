import React, { FC } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Arrow = styled.span`
  position: relative;
  background-color: currentColor;
  display: block;
  height: 1px;
  transition: all 0.2s ease-in;
  width: 1rem;
  margin-left: 0.5rem;
  transform: translate(0);
  &:before {
    content: '';
    display: block;
    height: 1px;
    width: 0.4rem;
    position: absolute;
    top: 0;
    right: 0;
    background-color: currentColor;
    transform: rotate(40deg);
    transform-origin: top right;
  }
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 0.4rem;
    position: absolute;
    top: 0;
    right: 0;
    background-color: currentColor;
    transform: rotate(-40deg);
    transform-origin: bottom right;
  }
`;

type CTALinkProps = {
  to: string;
};

const CTALink: FC<CTALinkProps> = ({ to, children }) => (
  <a
    css={css`
      position: relative;
      display: inline-flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
      &:hover {
        ${Arrow} {
          width: 1.5rem;
          transform: translate(20%);
        }
      }
    `}
    href={to}
  >
    <span
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      {children}
      <Arrow />
    </span>
  </a>
);

export default CTALink;
