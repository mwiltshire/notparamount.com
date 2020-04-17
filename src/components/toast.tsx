import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/core';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'emotion-theming';
import { Theme } from './layout';

type ToastStatus = 'success' | 'error';

type ToastProps = {
  show: boolean;
  message: string;
  handleClose: () => void;
  autoClose?: boolean;
  status?: ToastStatus | null;
};

type ToastContainerProps = Omit<ToastProps, 'show'>;

const ToastContainer: FC<ToastContainerProps> = ({
  status,
  message,
  handleClose,
  autoClose = true
}) => {
  const theme = useTheme<Theme>();
  useEffect(() => {
    if (autoClose) {
      const id = setTimeout(() => handleClose(), 5000);
      return () => clearTimeout(id);
    }
  }, [autoClose, handleClose]);

  const toastStatus: ToastStatus = status || 'success';

  return (
    <motion.div
      initial={{ opacity: 0, x: '-50%', y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        opacity: [1, 1, 0],
        y: [10, -20, 50],
        transition: { duration: 0.3 }
      }}
      css={css`
        position: fixed;
        bottom: 2rem;
        width: 85vmin;
        background: ${toastStatus === 'success'
          ? theme.colors.green100
          : theme.colors.red100};
        transform: translateX(-50%);
        left: 50%;
        border-radius: 0.3rem;
        box-shadow: 0px 6px 14px 4px rgba(0, 0, 0, 0.05),
          2px 15px 12px rgba(0, 0, 0, 0.01);
        z-index: 9999;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-basis: 3rem;
            background: ${toastStatus === 'success'
              ? theme.colors.green200
              : theme.colors.red200};
            border-top-left-radius: 0.3rem;
            border-bottom-left-radius: 0.3rem;
            overflow: hidden;
            & svg {
              height: 1.5rem;
              z-index: 2;
            }
            & path {
              fill: #fff;
            }
          `}
        >
          <svg role="img" viewBox="0 0 24 24">
            {toastStatus === 'success' ? (
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z" />
            ) : (
              <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            )}
          </svg>
          <motion.div
            css={css`
              position: absolute;
              border: inherit;
              bottom: 0;
              width: 100%;
              background: ${toastStatus === 'success'
                ? theme.colors.green300
                : theme.colors.red300};
              z-index: 1;
            `}
            initial={{ top: 0 }}
            animate={{
              top: autoClose ? '100%' : 0,
              transition: { duration: 5, ease: 'linear' }
            }}
          />
        </div>
        <p
          css={css`
            flex: 1;
            margin: 0;
            padding: 1rem;
            color: ${toastStatus === 'success'
              ? theme.colors.green300
              : theme.colors.red300};
          `}
        >
          {message}
        </p>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <button
            aria-label="Close toast"
            onClick={handleClose}
            css={css`
              background: none;
              border: none;
              cursor: pointer;
              &:focus {
                outline: none;
              }
              & svg {
                height: 0.75rem;
              }
              & path {
                transition: fill 300ms ease;
                fill: ${toastStatus === 'success'
                  ? theme.colors.green200
                  : theme.colors.red200};
              }
              &:hover path {
                fill: ${toastStatus === 'success'
                  ? theme.colors.green300
                  : theme.colors.red300};
              }
            `}
          >
            <svg role="img" viewBox="0 0 24 24">
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Toast: FC<ToastProps> = ({ show, ...rest }) => {
  if (typeof window === 'undefined' || !window.document) {
    return null;
  }
  return createPortal(
    <AnimatePresence>{show && <ToastContainer {...rest} />}</AnimatePresence>,
    document.body
  );
};

export default Toast;
