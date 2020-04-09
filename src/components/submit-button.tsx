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

const variants = {
  idle: { opacity: 1 },
  submitting: { opacity: 0 }
};

const loadingVariants = {
  invisible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 }
  },
  visible: { transition: { staggerChildren: 0.07, staggerDirection: -1 } }
};

const loadingDotVariants = {
  invisible: { opacity: 0 },
  visible: { opacity: 1 }
};

const SubmitButton: FC<SubmitButtonProps> = ({ isSubmitting, children }) => {
  const theme = useTheme<Theme>();
  return (
    <button
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
      `}
      onClick={() => {
        console.log(isSubmitting);
        if (isSubmitting) return;
      }}
      type="submit"
    >
      <motion.span
        variants={variants}
        animate={isSubmitting ? 'submitting' : 'idle'}
      >
        {children}
      </motion.span>
      <AnimatePresence>
        {isSubmitting && (
          <motion.span
            variants={loadingVariants}
            initial="invisible"
            animate="visible"
            exit="invisible"
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
              transition={{ duration: 0.5, yoyo: Infinity, ease: 'easeInOut' }}
              variants={loadingDotVariants}
            />
            <LoadingDot
              transition={{ duration: 0.5, yoyo: Infinity, ease: 'easeInOut' }}
              variants={loadingDotVariants}
            />
            <LoadingDot
              transition={{ duration: 0.5, yoyo: Infinity, ease: 'easeInOut' }}
              variants={loadingDotVariants}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default SubmitButton;
