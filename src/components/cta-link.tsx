import React, { FC } from 'react';
import { css } from '@emotion/core';
import { motion } from 'framer-motion';

type CTALinkProps = {
  to: string;
};

const variants = {
  default: { x: -3, opacity: 0, scale: 0 },
  hover: { x: 10, opacity: 1, scale: 1 }
};

const CTALink: FC<CTALinkProps> = ({ to, children }) => (
  <motion.a
    initial="default"
    whileHover="hover"
    css={css`
      position: relative;
      display: inline-flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
    `}
    href={to}
  >
    <span
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        &:after {
          content: '';
          position: absolute;
          bottom: -5px;
          width: 100%;
          height: 3px;
          background: currentColor;
        }
      `}
    >
      {children}
    </span>
    <motion.svg variants={variants} viewBox="0 0 24 24" height="15">
      <motion.path
        css={css`
          stroke: currentColor;
        `}
        strokeWidth="2"
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </motion.svg>
  </motion.a>
);

export default CTALink;
