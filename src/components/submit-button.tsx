import React, { FC } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { motion, AnimatePresence } from 'framer-motion';
import { Theme } from './layout';

type SubmitButtonProps = {
  isSubmitting: boolean;
};

const LoadingDot = styled(motion.span)`
  display: inline-block;
  background: currentColor;
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;

const loadingVariants = {
  hidden: {
    transition: { staggerChildren: 0.07 }
  },
  visible: { transition: { staggerChildren: 0.07, staggerDirection: -1 } }
};

const visibilityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const loadingDotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut'
};

const SubmitButton: FC<SubmitButtonProps> = ({ isSubmitting, children }) => {
  const theme = useTheme<Theme>();
  return (
    <motion.button
      disabled={isSubmitting}
      css={css`
        position: relative;
        outline: none;
        cursor: pointer;
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 0.3rem;
        color: ${theme.colors.textLight};
        font-weight: ${theme.fontWeights.bold};
        background: #43cea2;
        background: -webkit-linear-gradient(to right, #185a9d, #43cea2);
        background: linear-gradient(to right, #185a9d, #43cea2);
        transition: box-shadow 450ms ease;
        &:hover {
          box-shadow: -2px 1px 12px 1px rgba(0, 0, 0, 0.2);
        }
      `}
      type="submit"
    >
      <motion.span
        variants={visibilityVariants}
        animate={isSubmitting ? 'hidden' : 'visible'}
      >
        {children}
      </motion.span>
      <AnimatePresence>
        {isSubmitting && (
          <motion.span
            key="submit"
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            css={css`
              position: absolute;
              display: flex;
              height: 100%;
              top: 0;
              width: 100%;
              left: 0;
              align-items: center;
              justify-content: center;
              & span {
                margin: 0 0.1rem;
              }
            `}
          >
            <LoadingDot
              transition={loadingDotTransition}
              variants={visibilityVariants}
            />
            <LoadingDot
              transition={loadingDotTransition}
              variants={visibilityVariants}
            />
            <LoadingDot
              transition={loadingDotTransition}
              variants={visibilityVariants}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default SubmitButton;
